# MegaMart — Ecommerce Frontend

A responsive ecommerce website built with **React**, **TypeScript**, and **Vite**, replicating the Figma design reference.

## Project Purpose

This project is an intern frontend development task designed to demonstrate:
- **Figma-to-React Implementation**: Analyzing visual designs, slicing them into structured UI sections, and translating them into accurate React components.
- **Component Reusability & Props**: Building modular, reusable UI components (`ProductCard`, `CategoryCard`, `BrandBanner`, `EssentialCard`, etc.) and passing dynamic content via TypeScript props.
- **Responsive Web Design**: Ensuring full responsiveness across Desktop, Tablet, and Mobile screen viewports.

---

##  Technology Stack

- **Framework / Bundler**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules / Component-level CSS)
- **Icons & Assets**: SVG / Vector graphics & PNG image assets

---

## Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### 2. Installation

Clone the repository and install project dependencies:

```bash
git clone <repository-url>
cd ecommerce-frontend
npm install
```

### 3. Run Development Server

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

---

## Project Structure

```text
src/
├── assets/             # Icons and product image assets
├── components/
│   ├── common/         # Reusable generic UI (SectionHeader, Pagination)
│   ├── layout/         # Header, TopBar, NavBar, SearchBar, CategoryNav
│   └── ecommerce/      # ProductCard, CategoryCard, BrandBanner, EssentialCard, HeroBanner, Footer
├── pages/              # Page-level views (HomePage)
├── types/              # TypeScript prop interfaces & types
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global reset & typography
```

---

## Component Reusability Examples

Each component is designed to receive content dynamically through TypeScript typed props:

```tsx
<ProductCard
  name="Galaxy S22 Ultra"
  image={samsungs22}
  price="₹32999"
  oldPrice="₹74999"
  discount="56% OFF"
  saveText="Save ₹32999"
/>
```

```tsx
<CategoryCard
  name="Electronics"
  image={washingm}
/>
```

---

## Responsive Breakpoints

- **Desktop (1200px+)**: Full grid layout matching original Figma frame specifications.
- **Tablet (768px – 1024px)**: 3-column product grid, wrapped brand banners, and adjusted margins.
- **Mobile (< 768px / 480px)**: 2-column product grid, horizontally scrollable category bar, stacked header & hero banner, and touch-optimized navigation.
