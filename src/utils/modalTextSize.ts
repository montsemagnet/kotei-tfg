export const TEXT_SIZE_LEVELS = ["normal", "large", "xlarge"] as const;
export type TextSizeLevel = (typeof TEXT_SIZE_LEVELS)[number];

const STORAGE_KEY = "itinerari-modal-text-size";

const SIZE_LABELS: Record<TextSizeLevel, string> = {
  normal: "Text normal",
  large: "Text gran",
  xlarge: "Text molt gran",
};

export function getStoredTextSize(): TextSizeLevel {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "large" || value === "xlarge") return value;
  } catch {
    /* localStorage unavailable */
  }
  return "normal";
}

function getLevelIndex(level: TextSizeLevel): number {
  return TEXT_SIZE_LEVELS.indexOf(level);
}

function findOwnToolbar(panel: HTMLElement): HTMLElement | null {
  const toolbars = panel.querySelectorAll("[data-modal-text-size]");
  for (const toolbar of toolbars) {
    if (!(toolbar instanceof HTMLElement)) continue;
    if (toolbar.closest("[data-text-size-enabled]") === panel) return toolbar;
  }
  return null;
}

export function applyPanelTextSize(panel: HTMLElement, level: TextSizeLevel): void {
  if (level === "normal") {
    panel.removeAttribute("data-text-size");
  } else {
    panel.setAttribute("data-text-size", level);
  }

  try {
    localStorage.setItem(STORAGE_KEY, level);
  } catch {
    /* localStorage unavailable */
  }

  syncTextSizeControls(panel, level);
}

function syncTextSizeControls(panel: HTMLElement, level: TextSizeLevel): void {
  const toolbar = findOwnToolbar(panel);
  if (!toolbar) return;

  const decrease = toolbar.querySelector("[data-text-size-decrease]");
  const increase = toolbar.querySelector("[data-text-size-increase]");
  const status = toolbar.querySelector("[data-text-size-status]");

  if (decrease instanceof HTMLButtonElement) {
    decrease.disabled = level === "normal";
  }

  if (increase instanceof HTMLButtonElement) {
    increase.disabled = level === "xlarge";
  }

  if (status instanceof HTMLElement) {
    status.textContent = SIZE_LABELS[level];
  }
}

export function initModalTextSizeControls(panel: HTMLElement): void {
  const toolbar = findOwnToolbar(panel);
  if (!toolbar) {
    if (!panel.closest("dialog")) {
      panel.removeAttribute("data-text-size");
    }
    return;
  }
  if (toolbar.dataset.textSizeBound === "true") return;
  toolbar.dataset.textSizeBound = "true";

  const storedLevel = getStoredTextSize();
  applyPanelTextSize(panel, storedLevel);

  const decrease = toolbar.querySelector("[data-text-size-decrease]");
  const increase = toolbar.querySelector("[data-text-size-increase]");

  decrease?.addEventListener("click", () => {
    const current = panel.getAttribute("data-text-size") as TextSizeLevel | null;
    const index = getLevelIndex(current ?? "normal");
    applyPanelTextSize(panel, TEXT_SIZE_LEVELS[Math.max(0, index - 1)]);
  });

  increase?.addEventListener("click", () => {
    const current = panel.getAttribute("data-text-size") as TextSizeLevel | null;
    const index = getLevelIndex(current ?? "normal");
    applyPanelTextSize(
      panel,
      TEXT_SIZE_LEVELS[Math.min(TEXT_SIZE_LEVELS.length - 1, index + 1)],
    );
  });
}

export function initAllModalTextSizeControls(): void {
  document.querySelectorAll("[data-text-size-enabled]").forEach((panel) => {
    if (panel instanceof HTMLElement) initModalTextSizeControls(panel);
  });
}
