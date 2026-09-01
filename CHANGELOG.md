# Changelog

All notable changes to the Nexus SaaS Admin template.

## [1.0.1] - 2026-08-18

### Changed
- Replaced the Tailwind CSS Play CDN (`cdn.tailwindcss.com`) with a compiled, minified production stylesheet (`dist/assets/css/tailwind.css`) generated from `tailwind.config.js`. The Play CDN is not permitted in production items and previously appeared on every page.
- Bundled ApexCharts v3.54.1 locally at `dist/assets/js/vendor/apexcharts.min.js`, replacing the unpinned jsDelivr CDN reference on the three dashboard pages. All pages now work fully offline.
- Documentation page (`documentation/index.html`) updated to the same compiled stylesheet.

### Added
- Sidebar "Pages & Auth" navigation links to previously unreachable pages: Forgot Password, Reset Password, Two-Factor Auth, Lock Screen, Error 404, Error 500, Maintenance Mode, and Blank Starter (added on all 29 dashboard-layout pages).
- `CHANGELOG.md`.

### Removed
- macOS junk files from the package (`__MACOSX/`, `.DS_Store`).

## [1.0.0] - 2026-08-17
- Initial release: 41 HTML templates, 3 dashboards, full SaaS module set, UI kit, dark/light theme engine, documentation.
