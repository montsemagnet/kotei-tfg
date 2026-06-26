#!/usr/bin/env bash
# Netlify "ignore builds": surt 0 = ometre build, surt 1 = compilar.
# Vegeu https://docs.netlify.com/build/configure-builds/ignore-builds/

set -euo pipefail

# Build hook manual (URL de Netlify): sempre compila.
if [ -n "${INCOMING_HOOK_TITLE:-}" ] || [ -n "${INCOMING_HOOK_URL:-}" ]; then
  echo "Netlify: desplegament per build hook — es compila."
  exit 1
fi

# Netlify no exposa COMMIT_REF_MESSAGE; cal llegir el missatge amb git.
MSG="$(git log -1 --pretty=%B "${COMMIT_REF:-HEAD}" 2>/dev/null || true)"

if printf '%s' "$MSG" | grep -qF '[deploy]'; then
  echo "Netlify: commit amb [deploy] — es compila i es publica."
  exit 1
fi

echo "Netlify: build omès (afegeix [deploy] al missatge de commit per publicar)."
exit 0
