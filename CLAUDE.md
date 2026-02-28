# Math Game — Claude Instructions

## Versioning & PWA cache
- `APP_VERSION` in `version.js` is the **single source of truth** for the app version.
- `sw.js` derives its cache name from it via `importScripts('version.js')`.
- A **pre-commit hook** (`.git/hooks/pre-commit`) automatically bumps the patch version
  (e.g. `v1.3.0 → v1.3.1`) before every commit, so the SW cache always changes on deploy.
- **Do not manually edit the cache name in `sw.js`** — it is set automatically.
- If a minor or major version bump is needed, update `APP_VERSION` manually in `version.js`
  before committing; the hook will still bump the patch on top of that.

## Branch
- Always develop on `claude/weight-challenge-svg-graphics-kKp5I` and push there.
