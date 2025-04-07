# Beast Meat - Website Structure & Standards

## Project Overview
A modern, performant website for Beast Meat Butchery & Catering Service built with:
- Astro v5.3.0
- Tailwind CSS (via Vite plugin)
- TypeScript
- Deployed on Vercel

## Directory Structure
```
beast_meat/              # Root project directory
├── astro/              # Astro project directory
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   │   ├── common/     # Shared components
│   │   │   │   ├── Container.astro  # Layout wrapper ✓
│   │   │   │   ├── Footer.astro     # Site footer ✓
│   │   │   │   ├── Header.astro     # Navigation header ✓
│   │   │   │   └── Section.astro    # Section wrapper ✓
│   │   │   └── sections/   # Page-specific section components
│   │   │       └── AboutSection.astro  # About section component ✓
│   │   ├── assets/    # Static assets imported by components (e.g., via astro:assets)
│   │   │   └── ...
│   │   ├── layouts/   # Page layouts
│   │   │   └── Layout.astro     # Base layout with meta ✓
│   │   ├── pages/     # File-based routing
│   │   │   ├── index.astro      # Home page ✓ (Restructured)
│   │   │   ├── about.astro      # About page ✓
│   │   │   ├── butchery.astro   # Butchery page (New - Placeholder) 🚧
│   │   │   ├── kitchen.astro    # Kitchen page (New - Placeholder) 🚧
│   │   │   ├── catering.astro   # Catering page (New - Placeholder) 🚧
│   │   │   └── contact.astro    # Contact form ✓
│   │   └── styles/    # Global styles
│   │       ├── global.css       # CSS variables & base ✓
│   │       └── theme.css        # Component styles ✓
│   ├── public/        # Static assets (copied directly to build output)
│   │   ├── images/    # Image assets
│   │   │   ├── logo.svg         # Site logo ✓
│   │   │   ├── catering_photos/ # Catering images ✓
│   │   │   ├── hero/           # Hero images ✓
│   │   │   ├── icons/          # Icon assets ✓
│   │   │   ├── products/       # Product photos ✓
│   │   │   └── team/           # Team photos ✓
│   │   └── favicon.svg         # Site favicon ✓
│   ├── astro.config.mjs        # Astro config ✓
│   ├── tailwind.config.js      # Tailwind config ✓
│   ├── tsconfig.json           # TypeScript config ✓
│   └── package.json            # Dependencies ✓
├── docs/              # Documentation (or root .md files)
│   ├── STYLING.md            # Design system ✓
│   ├── TASKS.md             # Project tasks ✓
│   ├── COMPANY_DATA.md      # Business information ✓
│   └── PLAN.md              # Development plan ✓
├── flake.nix         # Nix development environment ✓
└── .gitignore        # Git ignore patterns ✓

```

## Configuration Files

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### tailwind.config.js
Core configuration for:
- Custom colors (brand, meat tones)
- Typography (Bebas Neue, Inter, Playfair Display)
- Container sizes
- Spacing scale
- Border radius
- Shadows
- Transitions

### package.json Dependencies
```json
{
  "dependencies": {
    "astro": "^5.3.0",
    "astro-navbar": "^2.3.9"
  },
  "devDependencies": {
    "@astrojs/image": "^0.18.0",
    "@tailwindcss/vite": "^4.0.7",
    "sharp": "^0.33.5",
    "tailwindcss": "^4.0.7"
  }
}
```

## Development Standards

### Component Architecture
1. Base Components
   - `Layout.astro`: Meta tags, fonts, global styles
   - `Container.astro`: Width constraints, padding
   - `Section.astro`: Vertical spacing, backgrounds
   - `Header.astro`: Navigation, mobile menu
   - `Footer.astro`: Site footer, links

2. Section Components
   - `AboutSection.astro`: Reusable component for About page content ✓

3. Planned UI Components
   - Button component (currently in global.css)
   - Card component
   - Form elements

### CSS Organization
1. Global Styles (global.css)
   - CSS custom properties
   - Base element styles
   - Utility classes
   - Button components

2. Theme Styles (theme.css)
   - Component patterns
   - Tailwind components
   - Custom utilities

### Asset Management
1. Image Standards
   - SVG for icons & logos
   - WebP/JPG for photos
   - Lazy loading
   - Alt text

2. Font Loading
   - Preconnect
   - Display swap
   - Subset loading

### Performance Guidelines
1. Core Web Vitals
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

2. Asset Optimization
   - Image compression
   - Font subsetting
   - Code splitting
   - Cache policies

### Development Workflow
1. Local Development
   ```bash
   # Start development server
   cd astro
   pnpm dev
   ```

2. Build Process
   ```bash
   pnpm build
   pnpm preview
   ```

3. Deployment
   ```bash
   vercel deploy
   ```

### Theme Management
- CSS variables for consistent values
- Component-specific patterns
- Responsive breakpoints
- Contextual color handling

### Current Implementation Status
- ✅ Base layout and components
- ✅ Homepage with hero section & service overview cards (Restructured)
- ✅ About page
- ✅ Services section
- ✅ Responsive design
- ✅ Core styling and theming
- ✅ Contact form
- ✅ Navigation updated
- 🚧 New Service Pages (`/butchery`, `/kitchen`, `/catering`) created (Placeholders)
- 🔄 Deployment setup (in progress) 