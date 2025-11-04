# ElferaHealth Landing Page

A modern, responsive landing page for ElferaHealth and Nursing Care Sdn Bhd, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with pinkish/nurse color theme
- Hero section with call-to-action buttons
- About section with company history and timeline
- Services showcase (8 comprehensive services)
- Medical Tourism facilitation process
- The IMPIAN Project section
- Impact statistics
- Contact section with embedded map
- Sticky contact button for mobile users
- Smooth animations with Framer Motion

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This will create a static export in the `out` directory.

### Deployment

The site is configured for static export and can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any web server

## Color Theme

- **Primary Pink**: `#FF6B9D` (elfera-pink)
- **Dark Pink**: `#E6399F` (elfera-pink-dark)
- **Light Pink**: `#FFB6C1` (elfera-pink-light)
- **Teal Accent**: `#4ECDC4` (elfera-teal)

## Project Structure

```
elferahealth-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── ImpiProject.tsx
│       ├── Impact.tsx
│       ├── Contact.tsx
│       └── StickyContactButton.tsx
├── public/
└── package.json
```

## Customization

### Contact Information

Update contact details in `src/components/Contact.tsx`:

- Address
- Phone number
- Email address
- Social media links

### Services

Modify services in `src/components/Services.tsx`

### Impact Statistics

Update statistics in `src/components/Impact.tsx`

## License

© 2025 ElferaHealth and Nursing Care Sdn Bhd. All rights reserved.

