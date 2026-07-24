# Kamal Industries & Enterprises — Official Web Portal

> **Authentic Kota Stone Manufacturer, Wholesaler & Global Exporter Since 1985**  
> *Amarpura, Ramganjmandi, District Kota, Rajasthan – 326519, India*

---

## 🌟 Overview

The official enterprise portal for **Kamal Industries** (and international export division **Kamal Enterprises**). Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, this web application delivers an immersive, high-performance showcase of Rajasthan's finest natural limestone and quartzite products.

---

## ✨ Features & Capabilities

### 🖼️ 1. Official Factory Gallery (32 Photos)
- Single source of truth gallery system in `src/data/images.ts`.
- Complete collection of 32 high-resolution photographs covering:
  - **Factory Yard & Open Storage**: Raw block yards, finished stockyards, dispatch docks.
  - **Products**: Machine-calibrated Kota Blue limestone, Kota Brown stone, Mandana Red quartzite, jumbo slabs, wall cladding, and stair treads.
  - **Machinery**: Multi-blade gang saw cutting lines, automated tile calibrators, and CNC waterjets.
  - **Packing & Dispatch**: Export-grade seaworthy wooden crate packaging and truck loading.
- Categorized tab filtering (`All`, `Factory Yard`, `Products`, `Machinery`, `Packing`, `Workers`, `Office`).
- Full-screen lightbox modal with keyboard navigation.

### 🌐 2. Interactive Multi-Language Switcher
- Built-in `LanguageSwitcher` in the desktop navbar and mobile drawer.
- Instant client-side page translation via Google Translate engine.
- Supported languages:
  - 🇬🇧 English (`EN`)
  - 🇮🇳 Hindi (`HI - हिन्दी`)
  - 🇮🇳 Gujarati (`GU - ગુજરાતી`)
  - 🇩🇪 German (`DE - Deutsch`)
  - 🇪🇸 Spanish (`ES - Español`)
  - 🇦🇪 Arabic (`AR - العربية`)
- Remembers user's selected language in `localStorage` and translation cookies.

### 🤖 3. Intelligent AI Support Chatbot & Help Console
- Floating support widget (`GlobalUI.tsx`) providing:
  - **AI Assistant**: Natural Language Processor with pretrained knowledge base on stone specifications, dimensions, finishes, pricing, logistics, and sample requests.
  - **1-Click Quick Question Chips**: Scrollable prompt pills (e.g. *Sizes & Thickness*, *Colors & Finishes*, *Delivery Timelines*, *Wholesale Quote*, *Export Crates*, *Sample Request*).
  - **Real-Time Typing Animation**: Smooth visual typing dots when the AI generates responses.
  - **Direct Helpline Dialer & Email Ticket Desk**: Seamless fallback to live sales coordinator via email escalation.

### 💎 4. Attractive Glassmorphic 3D Icon System (`Icon3D`)
- Custom React component (`src/components/ui/Icon3D.tsx`) delivering jewel-toned metallic iconography.
- Themes: `gold`, `emerald`, `blue`, `amber`, `charcoal`, `white`.
- Features glassmorphism glow rings, specular highlights, and spring hover elevation (`scale: 1.08`, `rotateX: 8deg`).

### 📦 5. Direct Wholesale Enquiry & Quote System
- Interactive quote request form with Indian state dropdowns, stone specifications, and quantity calculators.
- Powered by Prisma 7 & SQLite for enquiry tracking (`prisma/schema.prisma`).
- Email notification integration via Gmail SMTP & Resend API (`src/app/api/support/route.ts`).

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16.2 (App Router & Turbopack)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS, Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Prisma 7 ORM with SQLite (`prisma/enquiries.db`)
- **Email Service**: Nodemailer & Resend API

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/sudokamal/Kamal-industries.git
cd Kamal-industries

# 2. Install dependencies
npm install

# 3. Initialize Prisma Database
npx prisma db push

# 4. Start Development Server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To build the optimized production bundle:

```bash
npm run build
npm run start
```

---

## 📄 License

© **Kamal Industries & Enterprises**. All rights reserved. Direct quarry-to-project supplier since 1985.
