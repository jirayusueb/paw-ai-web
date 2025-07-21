# Design System: Paw AI Web

## Fundamental Principles

### Design Philosophy

- **Accessibility First**: WCAG 2.1 AA compliance
- **Performance Focused**: Optimized for speed and efficiency
- **Dark Theme**: Forced dark mode for consistent experience
- **Responsive**: Mobile-first design approach
- **Consistent**: Unified visual language across components

### Core Values

1. **Clarity**: Clear, readable interfaces
2. **Efficiency**: Fast, responsive interactions
3. **Inclusivity**: Accessible to all users
4. **Consistency**: Predictable design patterns
5. **Simplicity**: Clean, uncluttered interfaces

## Design Tokens

### Color Palette

#### Primary Colors

```css
/* Primary brand colors */
--primary-50: #f0f9ff;
--primary-100: #e0f2fe;
--primary-200: #bae6fd;
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;
--primary-600: #0284c7;
--primary-700: #0369a1;
--primary-800: #075985;
--primary-900: #0c4a6e;
--primary-950: #082f49;
```

#### Neutral Colors (Dark Theme)

```css
/* Neutral colors for dark theme */
--background: #0a0a0a;
--foreground: #fafafa;
--card: #1a1a1a;
--card-foreground: #fafafa;
--popover: #1a1a1a;
--popover-foreground: #fafafa;
--primary: #0ea5e9;
--primary-foreground: #0a0a0a;
--secondary: #262626;
--secondary-foreground: #fafafa;
--muted: #262626;
--muted-foreground: #a3a3a3;
--accent: #262626;
--accent-foreground: #fafafa;
--destructive: #dc2626;
--destructive-foreground: #fafafa;
--border: #262626;
--input: #262626;
--ring: #0ea5e9;
--radius: 0.5rem;
```

#### Semantic Colors

```css
/* Success states */
--success: #10b981;
--success-foreground: #0a0a0a;

/* Warning states */
--warning: #f59e0b;
--warning-foreground: #0a0a0a;

/* Error states */
--error: #ef4444;
--error-foreground: #fafafa;

/* Info states */
--info: #3b82f6;
--info-foreground: #fafafa;
```

### Typography

#### Font Stack

```css
/* Primary font: Geist Sans */
--font-sans: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", sans-serif;

/* Monospace font: Geist Mono */
--font-mono: "Geist Mono", "SF Mono", "Monaco", "Inconsolata", "Roboto Mono",
  monospace;
```

#### Font Sizes

```css
/* Text sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
```

#### Font Weights

```css
/* Font weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

#### Line Heights

```css
/* Line heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Spacing System

#### Base Spacing

```css
/* Spacing scale (4px base unit) */
--space-0: 0;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
```

#### Component Spacing

```css
/* Component-specific spacing */
--container-padding: var(--space-4);
--section-padding: var(--space-8);
--card-padding: var(--space-6);
--button-padding-x: var(--space-4);
--button-padding-y: var(--space-2);
--input-padding-x: var(--space-3);
--input-padding-y: var(--space-2);
```

### Border Radius

#### Radius Scale

```css
/* Border radius values */
--radius-none: 0;
--radius-sm: 0.125rem; /* 2px */
--radius-base: 0.25rem; /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */
--radius-xl: 0.75rem; /* 12px */
--radius-2xl: 1rem; /* 16px */
--radius-3xl: 1.5rem; /* 24px */
--radius-full: 9999px;
```

### Shadows & Elevation

#### Shadow System

```css
/* Shadow values for elevation */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

#### Elevation Levels

```css
/* Elevation system */
--elevation-0: none;
--elevation-1: var(--shadow-sm);
--elevation-2: var(--shadow-base);
--elevation-3: var(--shadow-md);
--elevation-4: var(--shadow-lg);
--elevation-5: var(--shadow-xl);
--elevation-6: var(--shadow-2xl);
```

### Animation & Transitions

#### Duration Scale

```css
/* Animation durations */
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;
```

#### Easing Functions

```css
/* Easing curves */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

#### Transition Patterns

```css
/* Common transition patterns */
--transition-fast: all var(--duration-150) var(--ease-out);
--transition-base: all var(--duration-200) var(--ease-out);
--transition-slow: all var(--duration-300) var(--ease-out);
--transition-bounce: all var(--duration-300) cubic-bezier(
    0.68,
    -0.55,
    0.265,
    1.55
  );
```

## Component Patterns

### Button Variants

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### Input Patterns

```typescript
const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
```

## Accessibility Guidelines

### Color Contrast

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Focus Management

- **Visible focus**: All interactive elements must have visible focus indicators
- **Focus order**: Logical tab order following visual layout
- **Skip links**: Provide skip links for main content

### Screen Reader Support

- **Semantic HTML**: Use proper HTML elements and ARIA attributes
- **Descriptive text**: Provide meaningful alt text and labels
- **Live regions**: Use ARIA live regions for dynamic content

### Keyboard Navigation

- **Full keyboard access**: All functionality accessible via keyboard
- **No keyboard traps**: Users can navigate in and out of components
- **Keyboard shortcuts**: Provide keyboard shortcuts for common actions
