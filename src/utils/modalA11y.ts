const FOCUSABLE_SELECTOR =
  'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const CLOSE_BUTTON_SELECTOR =
  ".itinerari-dada-close, .itinerari-zoom-close, .parada-gallery-close, .roca-gallery-close";

const dialogOpeners = new WeakMap<HTMLDialogElement, HTMLElement>();
const dialogBeforeCloseHandlers = new WeakMap<HTMLDialogElement, () => void>();

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (element) => element instanceof HTMLElement && element.getClientRects().length > 0,
  );
}

export function getModalPanel(dialog: HTMLElement): HTMLElement {
  const panel = dialog.querySelector(".itinerari-dada-panel, [data-text-size-enabled]");
  if (panel instanceof HTMLElement) return panel;

  const figure = dialog.querySelector("figure");
  if (figure instanceof HTMLElement) return figure;

  return dialog;
}

export function trapFocusInPanel(panel: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(panel);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

export function focusInitialModalElement(dialog: HTMLDialogElement): void {
  const panel = getModalPanel(dialog);
  const closeButton = panel.querySelector(CLOSE_BUTTON_SELECTOR);
  if (closeButton instanceof HTMLElement) {
    closeButton.focus();
    return;
  }

  getFocusableElements(panel)[0]?.focus();
}

export function restoreFocusToTrigger(trigger: HTMLElement): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      trigger.focus({ preventScroll: true });
    });
  });
}

function ensureDialogA11yListeners(dialog: HTMLDialogElement): void {
  if (dialog.dataset.dialogA11yBound === "true") return;
  dialog.dataset.dialogA11yBound = "true";

  const useFocusTrap = dialog.dataset.focusTrap !== "false";

  const closeDialog = () => {
    dialogBeforeCloseHandlers.get(dialog)?.();
    dialog.close();
  };

  dialog.querySelectorAll(CLOSE_BUTTON_SELECTOR).forEach((closeButton) => {
    closeButton.addEventListener("click", closeDialog);
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener("close", () => {
    const opener = dialogOpeners.get(dialog);
    if (opener instanceof HTMLElement && useFocusTrap) {
      restoreFocusToTrigger(opener);
    }
    dialogOpeners.delete(dialog);
  });

  if (useFocusTrap) {
    dialog.addEventListener("keydown", (event) => {
      if (!dialog.open) return;
      trapFocusInPanel(getModalPanel(dialog), event);
    });
  }
}

export function openDialogFromTrigger(
  dialog: HTMLDialogElement,
  trigger: HTMLElement,
  options: { onOpen?: () => void; onBeforeClose?: () => void } = {},
): void {
  ensureDialogA11yListeners(dialog);

  if (options.onBeforeClose) {
    dialogBeforeCloseHandlers.set(dialog, options.onBeforeClose);
  }

  dialogOpeners.set(dialog, trigger);
  dialog.showModal();
  options.onOpen?.();

  if (dialog.dataset.focusTrap !== "false") {
    requestAnimationFrame(() => focusInitialModalElement(dialog));
  }
}

export function bindDialogTrigger(
  trigger: HTMLElement,
  dialog: HTMLDialogElement,
  options: { onOpen?: () => void; onBeforeClose?: () => void } = {},
): void {
  if (trigger.dataset.dialogTriggerBound === "true") return;
  trigger.dataset.dialogTriggerBound = "true";

  trigger.addEventListener("click", () => {
    openDialogFromTrigger(dialog, trigger, options);
  });
}
