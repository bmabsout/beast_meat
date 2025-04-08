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
│   │   │   │   ├── Header.astro     # REMOVED ❌
│   │   │   │   ├── Section.astro    # Section wrapper ✓
│   │   │   │   ├── ServiceCard.astro # Service card component ✓
│   │   │   │   └── WhatsAppButton.astro # Floating WhatsApp button ✓
│   │   │   └── sections/   # Page-specific section components
│   │   │       └── AboutSection.astro  # About section component ✓
│   │   ├── assets/    # Static assets imported by components (e.g., via astro:assets)
│   │   │   └── ...
│   │   ├── effects/   # Special effects components (NEW) ✓
│   │   │   └── FireEffect.astro # Three.js fire effect component ✓
│   │   ├── layouts/   # Page layouts
│   │   │   └── Layout.astro     # Base layout with meta ✓
│   │   ├── pages/     # File-based routing
│   │   │   ├── index.astro      # Home page ✓ (Restructured, animated, background logo)
│   │   │   ├── about.astro      # About page ✓
│   │   │   ├── butchery.astro   # Butchery page (New - Placeholder) 🚧
│   │   │   ├── kitchen.astro    # Kitchen page (New - Placeholder) 🚧
│   │   │   ├── catering.astro   # Catering page (New - Placeholder) 🚧
│   │   │   └── contact.astro    # Contact form ✓
│   │   └── styles/    # Global styles
│   │       ├── global.css       # CSS variables & base ✓
│   │       └── theme.css        # Component styles ✓
│   ├── public/        # Static assets (copied directly to build output)
│   │   ├── videos/    # Video assets (NEW) ✓
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
    "astro-navbar": "^2.3.9",
    "three": "^0.174.0"
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
   - `Layout.astro`: Meta tags, fonts, global styles, WhatsApp button
   - `Container.astro`: Width constraints, padding
   - `Section.astro`: Vertical spacing, backgrounds
   - `Header.astro`: REMOVED ❌
   - `Footer.astro`: Site footer, links (Background updated) ✓
   - `WhatsAppButton.astro`: Floating WhatsApp button ✓
   - `ServiceCard.astro`: Service overview card (Extracted) ✓

2. Effect Components
   - `FireEffect.astro`: Three.js fire animation ✓

3. Section Components
   - `AboutSection.astro`: Reusable component for About page content ✓

4. Planned UI Components
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
- ✅ Base layout and components (Header removed, WhatsApp added, Footer updated) ✓
- ✅ Homepage with hero section & animated service overview cards (using ServiceCard component) ✓
- ✅ Subtle background logo added (with blur animation) ✓
- ✅ About page ✓
- ✅ Responsive design adjusted (Breakpoints, widths) ✓
- ✅ Core styling and theming ✓ (Dark theme applied)
- ✅ Contact form ✓
- ✅ Service card component extracted ✓
- ✅ Card animations polished (Hover/focus) ✓
- 🚧 New Service Pages (`/butchery`, `/kitchen`, `/catering`) content needed
- 🔄 Deployment setup (in progress) 