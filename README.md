# 🏗️ Prajapati Steel - Demo Business Website

![Prajapati Steel Preview](https://prajaparisteel.netlify.app/logo.jpg)

> A modern, responsive demo website showcasing a premium digital storefront for a legacy stainless steel supplier based in Mumbai.

**[Live Demo](https://prajaparisteel.netlify.app/) | [Report Bug](https://github.com/Akshayjg2204/prajapati-steel/issues) | [Request Feature](https://github.com/Akshayjg2204/prajapati-steel/issues)**

## ✨ Overview

This project is a high-performance portfolio piece designed to demonstrate modern web development practices. It simulates a fully functional, professional business website for "Prajapati Steel" (Est. 1985), providing a clear user journey from exploring premium steel products to understanding the company's legacy and initiating contact.

### Key Features
* **Modern UI/UX:** Built with a clean, component-driven design system featuring interactive carousels, accordions, and hover cards.
* **Products Showcase:** Detailed sections highlighting key offerings: Modular Kitchens, Hotel Equipment, and Steel Furniture.
* **Company Legacy Section:** A dedicated "About Us" section highlighting the company's 40+ years of experience, core values, and mission.
* **Direct Communication Integration:** Includes functional UI elements for contact forms, direct email links, and phone dialing.
* **Dark/Light Mode:** Includes a seamless theme toggler for user preference using a custom theme provider.
* **Fully Responsive:** Optimized UI for flawless browsing across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Package Manager:** pnpm
* **Hosting/Deployment:** Netlify / Vercel

## 🚀 Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Make sure you have Node.js installed, along with pnpm.

    npm install -g pnpm

### Installation

1. **Clone the repository:**

    git clone https://github.com/Akshayjg2204/prajapati-steel.git

2. **Navigate to the project directory:**

    cd prajapati-steel

3. **Install dependencies:**

    pnpm install

4. **Start the development server:**

    pnpm dev

Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

    ├── app/                     # Next.js App Router (pages & layouts)
    │   ├── globals.css          # Global styling
    │   ├── layout.tsx           # Root layout
    │   └── page.tsx             # Main landing page
    ├── components/              # React components
    │   ├── ui/                  # shadcn/ui component library
    │   ├── About.tsx            # Company legacy and values section
    │   ├── Contact.tsx          # Contact form and routing
    │   ├── Header.tsx           # Site header and navigation
    │   ├── Hero.tsx             # Hero section component
    │   ├── Products.tsx         # Steel products showcase
    │   └── theme-provider.tsx   # Dark/Light mode provider
    ├── hooks/                   # Custom React hooks (e.g., use-mobile)
    ├── lib/                     # Utility functions (e.g., utils.ts)
    ├── public/                  # Static assets
    │   └── logo.jpg             # Company logo and placeholders
    ├── styles/                  # Additional global styles
    ├── .env.development.local   # Environment variables
    ├── components.json          # shadcn/ui configuration
    ├── next.config.mjs          # Next.js configuration
    ├── package.json             # Project metadata and dependencies
    └── tsconfig.json            # TypeScript configuration
