# Nexus - Premium Tailwind CSS SaaS Admin Dashboard & Application Template

[![Tailwind CSS v3](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: Envato](https://img.shields.io/badge/License-Envato%20Commercial-blue.svg?style=flat-square)](https://codecanyon.net/)
[![W3C Valid](https://img.shields.io/badge/HTML5-W3C%20Valid-brightgreen.svg?style=flat-square)](https://validator.w3.org/)

**Nexus** is an ultra-modern, multipurpose SaaS Admin Dashboard and Application template built with **Tailwind CSS**. Designed according to strict **Envato / CodeCanyon Review Quality Standards**, Nexus provides full desktop and mobile responsive layouts, a flicker-free Dark/Light mode theme engine, interactive ApexCharts, full SaaS workflow pages, an extensive UI component kit, and complete documentation.

---

## 🌟 Key Features

- **Multi-Purpose SaaS Layouts**:
  - Executive Overview Dashboard (MRR, ARR, Churn, Plan Distribution)
  - CRM & Sales Pipeline Dashboard (Funnel stages, Win/Loss deals)
  - Traffic & App Telemetry Dashboard (Visitor velocity, Devices, Acquisition channels)
- **Comprehensive SaaS Modules**:
  - Team & User Management with Role-Based Access Control (RBAC)
  - Account Profile & Security Settings (2FA, Password, Notification Preferences)
  - Subscription & Billing Management (Resource meters, Saved cards, Invoices)
  - Professional Printable Invoices (`@media print` clean layout)
  - Interactive HTML5 Drag-and-Drop Kanban Sprint Board
  - Connected Apps & Marketplace Grid (Slack, Stripe, GitHub, AWS, Zapier, Discord)
  - API Keys & Programmatic Token Secrets Generator
  - Customer Support Helpdesk & Threaded Conversation Reply System
  - Security Audit & Activity Log Timeline
- **Authentication Suite**:
  - Sign In (Split-screen with social SSO)
  - Sign Up (With live password strength feedback)
  - Forgot Password & Reset Password
  - Two-Factor Authentication (6-digit OTP advance)
  - Screen Lock with User Avatar Unlock
- **UI Kit & Utility Pages**:
  - Full UI Component Library (Buttons, Badges, Alerts, Dropdowns, Modals, Tabs, Forms)
  - Public SaaS Pricing Matrix
  - Help Center & FAQ Accordions
  - 404 Not Found & 500 Server Error Illustrated Pages
  - Scheduled Maintenance / Coming Soon with Countdown Timer
  - Blank Starter Page for Rapid Prototyping
- **Zero Framework Lock-in**: Clean, modular ES6 Vanilla JavaScript. Compatible with Laravel, Django, Next.js, Rails, Nuxt, and Node backends.
- **100% Self-Contained Assets**: Compiled production Tailwind CSS (`assets/css/tailwind.css`), locally bundled ApexCharts, clean SVG vector logos, avatars, and illustrations. No `cdn.tailwindcss.com` Play CDN, no runtime JS compilation, no missing image 404s.

---

## 📁 Package Hierarchy

```text
nexus-saas-admin/
├── dist/                              # Ready-to-use production HTML files
│   ├── assets/
│   │   ├── css/                       # custom.css, tailwind.css
│   │   ├── js/                        # theme.js, app.js, charts.js, datatables.js, kanban.js
│   │   │   └── vendor/                # apexcharts.min.js (bundled locally, no CDN)
│   │   └── images/                    # avatars/, brands/, illustrations/, logo.svg
│   ├── index.html                     # SaaS Overview
│   ├── dashboard-crm.html             # CRM Pipeline
│   ├── dashboard-analytics.html       # Analytics
│   ├── users.html                     # Users & Team
│   ├── user-profile.html              # Account Settings
│   ├── billing.html                   # Subscriptions & Billing
│   ├── invoices.html                  # Invoices List
│   ├── invoice-detail.html            # Printable Invoice
│   ├── projects-kanban.html           # Kanban Board
│   ├── projects-list.html             # Projects Grid
│   ├── integrations.html              # Connected Apps
│   ├── api-keys.html                  # API Tokens
│   ├── tickets.html                   # Support Tickets
│   ├── ticket-detail.html             # Ticket Conversation
│   ├── activity-logs.html             # Activity Audit Log
│   ├── auth-login.html                # Sign In
│   ├── auth-register.html             # Sign Up
│   ├── auth-forgot-password.html      # Forgot Password
│   ├── auth-reset-password.html       # Reset Password
│   ├── auth-2fa.html                  # 2FA Verification
│   ├── auth-lock-screen.html          # Lock Screen
│   ├── pricing.html                   # Pricing Matrix
│   ├── faq.html                       # Help & FAQ
│   ├── blank.html                     # Blank Starter
│   ├── error-404.html                 # 404 Error
│   ├── error-500.html                 # 500 Error
│   ├── maintenance.html               # Maintenance Countdown
│   └── ui-components.html             # UI Kit Showcase
│
├── src/                               # Source Tailwind files
│   └── css/input.css
├── documentation/                     # CodeCanyon Item Documentation
│   └── index.html
├── tailwind.config.js                 # Tailwind CSS theme configuration
├── package.json                       # Scripts for Tailwind build & development
└── README.md
```

---

## 🚀 Quick Start

### 1. Direct Static Preview
Simply open any HTML file inside the `dist/` directory directly in your web browser (e.g. `dist/index.html`).

### 2. Custom Tailwind Build
To customize Tailwind colors or compile stylesheets:

```bash
# Install dependencies
npm install

# Start Tailwind live watcher
npm run dev

# Build production minified CSS
npm run build
```

---

## 📄 License & Credits

- **Fonts**: Plus Jakarta Sans, Inter (Google Fonts, SIL Open Font License).
- **Icons**: Lucide Icons & Heroicons (MIT License).
- **Charts**: ApexCharts v3.54 (MIT License, bundled locally at `assets/js/vendor/apexcharts.min.js`).
- **License**: Envato / CodeCanyon Regular or Extended Commercial License.
