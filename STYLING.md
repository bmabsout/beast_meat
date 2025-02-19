# Beast Meat - Design System & Styling Guide

## Brand Identity

### Core Aesthetic
- Bold, dramatic presentation
- Fire and flame elements
- Raw, primal energy
- High contrast imagery
- Dark, moody backgrounds
- Emphasis on texture and detail

### Logo Usage
- Bold, dramatic knife design with thick strokes
- Strong typography with "BEAST" as focal point
- Default variant: Uses currentColor for context-aware coloring
- White variant: Fixed white color for dark backgrounds
- SVG format for optimal scaling
- Clear space: Minimum 1.5rem padding around logo
- Minimum display height: 32px

### Color Palette

#### Brand Colors
```css
--color-beast-red: #CF1124    /* Primary brand color - intense red */
--color-beast-orange: #C05621 /* Fire/flame accent */
--color-beast-ember: #F6AD55  /* Warm highlight */
```

#### Meat-Inspired Palette
```css
--color-meat-raw: #9B2C2C     /* Deep red for raw meat */
--color-meat-seared: #744210  /* Rich brown for seared meat */
--color-meat-charred: #1A1A1A /* Almost black for char */
--color-meat-marbling: #F7FAFC /* Clean white for contrast */
```

#### Supporting Colors
```css
--color-slate-900: #1A202C    /* Primary text */
--color-slate-800: #2D3748    /* Secondary text */
--color-slate-700: #4A5568    /* Muted text */
--color-slate-200: #E2E8F0    /* Light borders */
--color-slate-100: #F7FAFC    /* Light backgrounds */
```

### Typography

#### Font Stack
```css
--font-heading: "Bebas Neue", sans-serif  /* Bold, impactful headlines */
--font-body: "Inter", sans-serif          /* Clean, readable text */
--font-accent: "Playfair Display", serif  /* Elegant details */
```

#### Heading Styles
```css
h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

h3 {
  font-family: var(--font-heading);
  font-size: 2rem;
  line-height: 1.4;
}
```

#### Body Text
```css
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-slate-900);
}

.lead {
  font-size: var(--text-xl);
  color: var(--color-slate-800);
}
```

### Spacing System
```css
--space-xs: 0.25rem    /* 4px  - Minimal spacing */
--space-sm: 0.5rem     /* 8px  - Tight spacing */
--space-md: 1rem       /* 16px - Default spacing */
--space-lg: 1.5rem     /* 24px - Section padding */
--space-xl: 2rem       /* 32px - Large gaps */
--space-2xl: 3rem      /* 48px - Section margins */
```

### Component Patterns

#### Container
```css
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
```

#### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  font-weight: 600;
  border-radius: var(--radius-default);
  transition: all var(--duration-default);
}

.btn-primary {
  background: var(--color-beast-red);
  color: white;
}

.btn-secondary {
  border: 2px solid var(--color-meat-charred);
  color: var(--color-meat-charred);
}
```

#### Cards
```css
.card {
  background: white;
  border-radius: var(--radius-default);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-hover {
  transition: transform var(--duration-default);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
}
```

### Layout

#### Grid System
- 12-column grid
- Responsive gutters:
  - Mobile: 16px
  - Desktop: 24px
- Container max-width: 1200px
- Breakpoints:
  ```css
  --screen-sm: 480px
  --screen-md: 768px
  --screen-lg: 1024px
  --screen-xl: 1200px
  ```

#### Section Spacing
```css
.section {
  padding-block: var(--space-2xl);
}

.section-tight {
  padding-block: var(--space-xl);
}
```

### Motion

#### Transitions
```css
--duration-default: 150ms
--duration-medium: 250ms
--duration-long: 300ms
--ease-default: cubic-bezier(0.4, 0, 0.2, 1)
```

#### Hover Effects
- Buttons: Background color shift
- Cards: Subtle scale + shadow
- Links: Color transition
- Images: Opacity change

### Image Treatment
- High contrast product photography
- Dramatic lighting on meat cuts
- Fire and flame elements
- Rich, dark backgrounds
- Sharp focus on texture
- Consistent aspect ratios
- Overlay gradients for text legibility

### Accessibility
- High contrast text
- Clear focus states
- Semantic markup
- Screen reader support
- Touch-friendly targets
- Keyboard navigation

### Responsive Design
- Mobile-first approach
- Fluid typography
- Flexible layouts
- Preserved drama at all sizes
- Touch-optimized interactions

### Photography Guidelines
- Dramatic lighting
- Rich, dark backgrounds
- Fire and flame elements
- Textural detail in meat
- Action shots of preparation
- Clean, professional styling
- Consistent color grading
