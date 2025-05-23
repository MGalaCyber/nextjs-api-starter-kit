# 🚀 NEXTJS API Starter Kit

A powerful starter kit built with **Next.js**, **Tailwind CSS**, and **Swagger UI** — perfect for building modern REST API platforms with user authentication, dashboards, freemium upgrade pages, and built-in API documentation playground.

---
## 📚Table of Contents
- [Screenshot](#️-preview-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick start](#-quick-start)
- [File Structure](#-quick-start)

---

## 🖼️ Preview Screenshots


#### FREE VERSION > [DEMO](https://demo.galaxd.com/p/nextjs-api-starter-kit-free)
| Landing Page | Dashboard |
|--------------|-----------|
| ![Landing](./public/preview/free/landing.png) | ![Dashboard](./public/preview/free/dashboard.png) |

| Status | Swagger Playground |
|------------|--------------------|
| ![Status](./public/preview/free/status.png) | ![Playground](./public/preview/free/playground.png) |


#### PREMIUM VERSION > [DEMO](https://demo.galaxd.com/r/nextjs-api-starter-kit-premium)
```
DEMO ACCOUNT:
email: demo@mail.com
password: demo
```

<div align="center" style"border-radius:15px">
    <a href="https://sociabuzz.com/galaxd/p/nextjs-api-starter-kit">
        <img alt="SociaBuzz" height="40" src="https://github.com/MGalaCyber/Badges/blob/master/sociabuzz.svg"/>
    </a>
</div>

| Landing Page | Dashboard Dark Mode | Dashboard Light Mode |
|-----------|-----------|-----------|
| ![Landing](./public/preview/premium/landing.png) | ![Dashboard](./public/preview/premium/dashboard.png) | ![DashboardLight](./public/preview/premium/light-mode.png) |

| Sign In | Sign Up | Verification Email |
|-----------|-----------|-----------|
| ![SignIn](./public/preview/premium/signin.png) | ![SignUp](./public/preview/premium/signup.png) | ![EmailVerification](./public/preview/premium/email-verification.png) |

| Forgot Password | Reset Password | Playground |
|-----------|-----------|-----------|
| ![ForgotPassword](./public/preview/premium/forgot-password.png) | ![ResetPassword](./public/preview/premium/reset-password.png) | ![Playground](./public/preview/premium/playground.png) |

| Status | Not Found | Pricing |
|-----------|-----------|-----------|
| ![Status](./public/preview/premium/status.png) | ![404](./public/preview/premium/404.png) | ![Pricing](./public/preview/premium/pricing.png) |

| Settings API Key | Settings Account | Settings Danger Zone |
|-----------|-----------|-----------|
| ![SApiKey](./public/preview/premium/settings-apikey.png) | ![SAccount](./public/preview/premium/settings-account.png) | ![SDZ](./public/preview/premium/settings-dangerzone.png) |

| Delete Account | SMTP Confirm Email | SMTP Forgot Password |
|-----------|-----------|-----------|
| ![DeleteAccount](./public/preview/premium/delete-account.png) | ![SMTPEmail](./public/preview/premium/smtp-confirm-email.png) | ![SMTPPassword](./public/preview/premium/smtp-forgot-password.png) |

---

## ✨ Features

- 🌐 Beautiful landing page (Tailwind CSS)
- 🔐 Login & registration system
- 📊 User dashboard with access control
- 💎 Upgrade page for free/premium plans
- 🧪 API Playground using Swagger UI inside the dashboard
- ⚙️ RESTful API routes with OpenAPI documentation
- 🔑 API Key system with rate limiting
- 📁 Clean and modular project structure

### 🆚 Free vs Premium Comparison

| FEATURES                              |   FREE   | PREMIUM |
|----------------------------           |:--------:|:-------:|
| Swagger UI                            |   ✅     |   ✅    |
| Landing Page                          |   ✅     |   ✅    |
| Dashboard Page                        |   ✅     |   ✅    |
| Playground Page                       |   ✅     |   ✅    |
| Upgrade Plan Page                     |   ✅     |   ✅    |
| Stats & Status Page                   |   ✅     |   ✅    |
| Sign In & Sign Up Page                |   ❌     |   ✅    |
| Forgot, Reset & Confirm Email Pages   |   ❌     |   ✅    |
| Supports 4 OAuth2 Providers           |   ❌     |   ✅    |
| Custom Swagger Theme UI               |   ❌     |   ✅    |
| Custom VSCode Snippets                |   ❌     |   ✅    |
| Supports SMTP                         |   ❌     |   ✅    |
| Rate Limiting                         |   ❌     |   ✅    |
| API Key Access                        |   ❌     |   ✅    |
| Account Management                    |   ❌     |   ✅    |
| Priority Support                      |   ❌     |   ✅    |
| Access to Exclusive Features          |   ❌     |   ✅    |
| Access to Exclusive Discord Roles     |   ❌     |   ✅    |
| Early Access to Updates               |   ❌     |   ✅    |

---

## 🔑 API Key System

This project includes a built-in API key system for managing access to protected endpoints.

### How it works:

- Every registered user is assigned a unique API key.
- API keys must be passed in the `X-RESTful-KEY` header.
- Different rate limits can be set for free vs. premium users.
- Invalid or missing API keys will result in a `401 Unauthorized` error.

---

## 🧱 Tech Stack

- **Next.js**
- **Tailwind CSS**
- **Swagger UI (OpenAPI 3.x)**
- **TypeScript / JavaScript**
- **Axios / Fetch**
- **MongoDB, JWT, NextAuth, SMTP**

---

## 🛠 Quick start
1. Clone this repository or download from [MGalaCyber](https://github.com/MGalaCyber/nextjs-api-starter-kit) or buy premium version [HERE](https://sociabuzz.com/galaxd/p/nextjs-api-starter-kit)
2. Make sure you have **Node.js** installed on your machine.
3. Install the dependencies using your preferred package manager:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
4. Setup environment (Note: `Only available in Premium version`)
```yml
SITE_MODE=REPLACE_ME #Use: development | production
MONGOOSE_URI=REPLACE_ME #Go to: https://cloud.mongodb.com
NEXTAUTH_SECRET=REPLACE_ME #Open terminal and type: openssl rand -base64 64
NEXTAUTH_URL=REPLACE_ME #Paste your domain URL

# AUTH PROVIDERS
# Google - Go to: https://console.cloud.google.com/auth
AUTH_GOOGLE_CLIENT_ID=REPLACE_ME
AUTH_GOOGLE_CLIENT_SECRET=REPLACE_ME
# Github - Go to: https://github.com/settings/developers
AUTH_GITHUB_CLIENT_ID=REPLACE_ME
AUTH_GITHUB_CLIENT_SECRET=REPLACE_ME
# Discord - Go to: https://discord.com/developers/applications
AUTH_DISCORD_CLIENT_ID=REPLACE_ME
AUTH_DISCORD_CLIENT_SECRET=REPLACE_ME

# NODEMAILER - You can search "SMTP Free" on browser or use Brevo
NODEMAILER_AUTH_USER=REPLACE_ME
NODEMAILER_AUTH_PASSWORD=REPLACE_ME
```
6. Setup site: Go to `src/config/site.ts`
7. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
8. Open http://localhost:3000 in your browser to view the app.


### Example request with API key:

```bash
curl -X 'GET' \
  'http://localhost:3000/api/v1/users' \
  -H 'accept: application/json' \
  -H 'X-RESTful-KEY: your-api-key-goes-here
```

---

## 📂 Files Structure
<details>
<summary>Premium version</summary>

```
.
├── .vscode
│   └── nextjs-api-starter-kit-premium.code-snippets
├── public
│   ├── preview
│   │   ├── free
│   │   │   ├── dashboard.png
│   │   │   ├── landing.png
│   │   │   ├── playground.png
│   │   │   └── status.png
│   │   └── premium
│   │       ├── 404.png
│   │       ├── dashboard.png
│   │       ├── delete-account.png
│   │       ├── email-verification.png
│   │       ├── forgot-password.png
│   │       ├── landing.png
│   │       ├── light-mode.png
│   │       ├── playground.png
│   │       ├── pricing.png
│   │       ├── reset-password.png
│   │       ├── settings-account.png
│   │       ├── settings-apikey.png
│   │       ├── settings-dangerzone.png
│   │       ├── signin.png
│   │       ├── signup.png
│   │       ├── smtp-confirm-email.png
│   │       ├── smtp-forgot-password.png
│   │       └── status.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── actions
│   │   │   └── github.ts
│   │   ├── api
│   │   │   ├── [...slug]
│   │   │   │   └── route.ts
│   │   │   ├── auth
│   │   │   │   ├── [...nextauth]
│   │   │   │   │   └── route.ts
│   │   │   │   └── signup
│   │   │   │       └── route.ts
│   │   │   ├── data
│   │   │   │   ├── regenKey
│   │   │   │   │   └── route.ts
│   │   │   │   ├── stats
│   │   │   │   │   ├── server
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── route.ts
│   │   │   │   └── user
│   │   │   │       └── route.ts
│   │   │   ├── sendMail
│   │   │   │   ├── reset-password
│   │   │   │   │   └── route.ts
│   │   │   │   └── verification-email
│   │   │   │       └── route.ts
│   │   │   ├── test
│   │   │   │   └── route.ts
│   │   │   └── v1
│   │   │       └── users
│   │   │           └── route.ts
│   │   ├── auth
│   │   │   ├── confirm-email
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password
│   │   │   │   └── [userId]
│   │   │   │       └── page.tsx
│   │   │   ├── signin
│   │   │   │   └── page.tsx
│   │   │   ├── signup
│   │   │   │   └── page.tsx
│   │   │   └── verification
│   │   │       └── [userId]
│   │   │           └── page.tsx
│   │   ├── dashboard
│   │   │   ├── playground
│   │   │   │   └── page.tsx
│   │   │   ├── pricing
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── endpoints
│   │   │   └── route.ts
│   │   ├── status
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── dash
│   │   │   ├── stats
│   │   │   │   ├── account.tsx
│   │   │   │   └── global.tsx
│   │   │   ├── content.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── profile.tsx
│   │   │   ├── project-list.tsx
│   │   │   ├── settings.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── top-nav.tsx
│   │   ├── ui
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   ├── background.tsx
│   │   ├── confirm-email.tsx
│   │   ├── cookie-consent.tsx
│   │   ├── footer.tsx
│   │   ├── preloader.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── type-writer.tsx
│   │   └── visitor.tsx
│   ├── config
│   │   ├── site.ts
│   │   └── swagger.ts
│   ├── context
│   │   └── authProvider.tsx
│   ├── hooks
│   │   ├── use-toast.ts
│   │   ├── useCountUp.ts
│   │   └── useTextScramble.ts
│   ├── lib
│   │   ├── functions.ts
│   │   ├── httpErrorHandler.ts
│   │   ├── mongodb.ts
│   │   ├── nodemailer.ts
│   │   ├── responseHandlers.ts
│   │   ├── swaggerCompiler.ts
│   │   ├── utils.ts
│   │   └── withApiKeyAuth.ts
│   ├── models
│   │   ├── cooldown.ts
│   │   ├── passwordResetStatus.ts
│   │   ├── user.ts
│   │   └── verificationStatus.ts
│   ├── styles
│   │   └── SwaggerTheme.css
│   ├── types
│   │   ├── auth.ts
│   │   ├── next-auth.d.ts
│   │   └── swagger.ts
│   └── middleware.ts
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── LICENSE
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

</details>

<details>
<summary>Free version</summary>

```
.
├── public
│   ├── preview
│   │   ├── dashboard.png
│   │   ├── landing.png
│   │   ├── playground.png
│   │   └── status.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── actions
│   │   │   └── github.ts
│   │   ├── api
│   │   │   ├── data
│   │   │   │   ├── stats
│   │   │   │   │   └── route.ts
│   │   │   │   └── user
│   │   │   │       └── route.ts
│   │   │   ├── test
│   │   │   │   └── route.ts
│   │   │   └── v1
│   │   │       └── users
│   │   │           └── route.ts
│   │   ├── dashboard
│   │   │   ├── playground
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── endpoints
│   │   │   └── route.ts
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── status
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   ├── components
│   │   ├── dash
│   │   │   ├── stats
│   │   │   │   └── global.tsx
│   │   │   ├── content.tsx
│   │   │   ├── dashboard.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── profile.tsx
│   │   │   ├── project-list.tsx
│   │   │   ├── settings.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── top-nav.tsx
│   │   ├── ui
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   └── tabs.tsx
│   │   ├── background.tsx
│   │   ├── footer.tsx
│   │   ├── preloader.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── type-writer.tsx
│   ├── config
│   │   ├── site.ts
│   │   ├── swagger.ts
│   │   └── swaggerCompiler.ts
│   ├── hooks
│   │   ├── useCountUp.ts
│   │   └── useTextScramble.ts
│   ├── lib
│   │   ├── responseHandlers.ts
│   │   └── utils.ts
│   ├── sections
│   ├── types
│   │   ├── auth.ts
│   │   └── swagger.ts
│   └── middleware.ts
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

</details>