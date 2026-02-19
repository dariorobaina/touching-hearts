# Touching Hearts Medical Services

Landing page built with **Astro** + **Tailwind CSS** for Touching Hearts Medical Services. A professional healthcare website showcasing IV therapy and home health care services.

## Features

- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Contact form with EmailJS integration
- Treatment gallery with detailed information
- About section with team credentials
- SEO optimized

## Tech Stack

- **Astro 5.17** - Static site generator
- **Tailwind CSS 3** - Utility-first CSS
- **EmailJS** - Email service for contact forms
- **Material Symbols** - Google icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/dariorobaina/touching-hearts.git
cd touching-hearts

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── HowItWorks.astro
│   ├── PremiumTreatments.astro
│   ├── AboutUs.astro
│   ├── ContactForm.astro
│   └── Footer.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/             # Routes
│   └── index.astro
├── content/           # Markdown content
│   └── treatments.md
└── styles/            # Global styles
    └── global.css
public/                # Static assets
├── images/           # Product and team images
└── logo files
```

## Environment Variables

For email functionality, create a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Contact

- **Phone:** (813) 850-3252
- **Email:** sahilygurre@gmail.com
- **Location:** Tampa, Florida

