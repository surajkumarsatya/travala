# Travala — Holiday Packages Website

Travala is a responsive holiday packages website created as part of a frontend development assignment. It presents a sample travel company with curated destinations, holiday packages, company information, and a contact experience.

## Live Demo

- Live Website: *Add your deployed URL here*

## GitHub Repository

- Repository: [github.com/surajkumarsatya/travala](https://github.com/surajkumarsatya/travala)

## Assignment Requirements

The project covers the required assignment sections:

- Hero section with a clear call-to-action
- Responsive navigation bar
- About Us
- Trips, destinations, and holiday packages
- Contact Us form
- Footer with company information and useful links
- Responsive desktop, tablet, and mobile layouts
- Functional navigation and user interactions
- Reusable components and organized project structure

## Features

### Hero
- Travel-focused introduction
- Primary call-to-action
- Responsive layout

### Navigation
- Home
- About
- Packages
- Contact
- Explore Trips CTA
- Responsive hamburger menu

### About
- Company story and purpose
- Guiding foundations
- Traveler-focused metrics
- Founding philosophy
- Call-to-action section

### Holiday Packages
- Multiple destinations
- Destination imagery
- Package duration and pricing
- Package cards
- Package catalog
- Filtering and sorting interface
- Destination detail views

### Contact
- Contact information
- Email, phone, and location details
- Contact form
- WhatsApp quick-connect CTA
- Emergency concierge information
- FAQ accordion

### Footer
- Company information
- Navigation links
- Contact details

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Next.js App Router
- Next.js Image

## Design

The website follows a minimal editorial travel aesthetic using:

- Off-white backgrounds
- Terracotta accents
- Dark typography
- Minimal borders
- Spacious layouts
- Responsive typography
- Travel photography

### Typography

- **Manrope** — headings and display text
- **Work Sans** — body text, labels, and navigation

## Project Structure

```
travala/
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── packages/
│   │   │   ├── [destination]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── packages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── Packages.tsx
│   │
│   └── data/
│       ├── packageCatalog.ts
│       └── packages.ts
│
├── package.json
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/surajkumarsatya/travala.git
cd travala
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Responsive Design

Travala is designed for:

- Desktop
- Tablet
- Mobile

The navigation uses responsive breakpoints so that tablet and mobile screens use a compact menu while larger desktop screens display the full navigation.

Additional responsive adjustments were made for intermediate tablet layouts to prevent headings, CTAs, cards, and navigation elements from becoming cramped.

## Accessibility & UX

The project includes:

- Semantic HTML
- Descriptive image alt text
- Accessible navigation controls
- `aria-label` and `aria-expanded` for the mobile menu
- Keyboard-friendly links and form controls
- Clear visual hierarchy
- Responsive spacing and typography

## Development Approach

The project uses reusable React components instead of placing the entire website inside individual pages.

Main reusable components include:

- Navbar
- Hero
- About
- Packages
- CTA
- Contact
- Footer

Page-specific components are organized into:

- `components/about`
- `components/packages`
- `components/contact`

Package information is separated into data files to keep content and UI logic organized and maintainable.

## Deployment

The project can be deployed on a Next.js-compatible platform such as Vercel.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select the Next.js project.
4. Deploy.
5. Add the deployed URL to this README.

## Assignment Submission

**GitHub Repository**
[https://github.com/surajkumarsatya/travala](https://github.com/surajkumarsatya/travala)

**Deployed Website**
*\<your-deployed-website-url\>*

## Project

**Travala**

A simple travel experience designed to help users discover holiday destinations and plan their next journey.