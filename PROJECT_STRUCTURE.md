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
│   │   │   ├── sections/   # Page sections
│   │   │   │   └── Hero.astro       # Homepage hero
│   │   │   └── ui/         # UI elements
│   │   │       ├── Button.astro     # Button component
│   │   │       └── Card.astro       # Card component
│   │   ├── layouts/   # Page layouts
│   │   │   └── Layout.astro     # Base layout with meta ✓
│   │   ├── pages/     # File-based routing
│   │   │   ├── index.astro      # Home page ✓
│   │   │   ├── menu.astro       # Menu & Products
│   │   │   ├── services.astro   # Services
│   │   │   ├── about.astro      # About page
│   │   │   └── contact.astro    # Contact form
│   │   ├── styles/    # Global styles
│   │   │   ├── global.css       # CSS variables & base ✓
│   │   │   └── theme.css        # Component styles ✓
│   │   └── utils/     # Utility functions
│   │       └── types.ts         # TypeScript definitions
│   ├── public/        # Static assets
│   │   ├── images/    # Image assets
│   │   │   ├── hero/           # Hero images ✓
│   │   │   │   └── hero-bg.jpg # Hero background ✓
│   │   │   └── products/       # Product photos
│   │   ├── icons/     # Icon assets
│   │   │   ├── logo.svg        # Default logo ✓
│   │   │   └── logo-white.svg  # White variant ✓
│   │   └── favicon.svg         # Site favicon ✓
│   ├── astro.config.mjs        # Astro config ✓
│   ├── tailwind.config.js      # Tailwind config ✓
│   ├── tsconfig.json           # TypeScript config ✓
│   └── package.json            # Dependencies ✓
├── docs/              # Documentation
│   ├── STYLING.md            # Design system ✓
│   ├── TASKS.md             # Project tasks ✓
│   └── PLAN.md              # Development plan ✓
├── flake.nix         # Nix development environment ✓
└── .gitignore        # Git ignore patterns

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
    "astro": "^5.3.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "^5.0.0"
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

2. UI Components
   - Consistent props interface
   - TypeScript definitions
   - Tailwind utility classes
   - CSS custom properties

### CSS Organization
1. Global Styles (global.css)
   - CSS custom properties
   - Base element styles
   - Utility classes

2. Theme Styles (theme.css)
   - Component patterns
   - Tailwind components
   - Custom utilities

### Asset Management
1. Image Standards
   - SVG for icons & logos
   - WebP for photos
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
   # Enter dev environment
   nix develop
   
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

## Development Setup
1. Clone repository
2. Enter development shell: `nix develop`
3. Navigate to Astro directory: `cd astro`
4. Install dependencies: `pnpm install`
5. Start development: `pnpm dev`

### Theme Management
- CSS variables for consistent values
- Component-specific patterns
- Responsive breakpoints
- Contextual color handling

### Content Management
- Structured content collections
- Type-safe schemas
- Easy content updates
- Version controlled 