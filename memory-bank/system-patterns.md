# System Patterns: Paw AI Web

## Architecture Overview

### App Router Structure

```
src/app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx           # Home page
├── globals.css        # Global styles
├── client-provider.tsx # Client-side providers
└── [future-routes]/   # Dynamic routes
```

### Component Architecture

```
src/
├── app/               # Next.js App Router pages
├── lib/               # Utilities and configurations
│   ├── utils.ts       # General utilities
│   └── theme-provider.tsx # Theme management
└── components/        # Reusable UI components
    └── ui/           # Base UI components
        └── sonner.tsx # Toast notifications
```

## Key Design Patterns

### 1. Server-First Architecture

- **Server Components by default**: All components start as server components
- **Client Components when needed**: Only use "use client" when necessary
- **Progressive enhancement**: Core functionality works without JavaScript

### 2. Theme Management Pattern

```typescript
// Forced dark theme configuration
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={false}
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

### 3. Component Composition Pattern

```typescript
// Using class-variance-authority for variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### 4. Error Handling Pattern

```typescript
// Comprehensive error handling with early returns
function processData(data: unknown) {
  if (!data) {
    return { success: false, error: "No data provided" };
  }

  try {
    const result = validateAndProcess(data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Processing failed:", error);
    return { success: false, error: error.message };
  }
}
```

### 5. Type Safety Pattern

```typescript
// Interface over type preference
interface UserData {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}

// Strict typing with no any
function handleUserAction(user: UserData, action: UserAction): ActionResult {
  // Implementation with full type safety
}
```

## Component Relationships

### Provider Hierarchy

```
RootLayout
├── ThemeProvider (forced dark)
├── NiceModal.Provider
└── Toaster
    └── Page Components
```

### Data Flow

1. **Server Components**: Handle data fetching and initial rendering
2. **Client Components**: Handle interactivity and state management
3. **Providers**: Manage global state (theme, modals, notifications)
4. **UI Components**: Reusable, composable interface elements

## State Management Patterns

### 1. Local State

- Use React hooks for component-specific state
- Prefer `useState` and `useReducer` for simple state
- Use `useCallback` and `useMemo` for performance optimization

### 2. Global State

- **Theme**: Managed by next-themes
- **Modals**: Managed by nice-modal-react
- **Notifications**: Managed by sonner
- **Future**: Consider Zustand for complex global state

### 3. Server State

- Use Next.js App Router for data fetching
- Implement proper caching strategies
- Handle loading and error states gracefully

## Performance Patterns

### 1. Code Splitting

- Automatic with Next.js App Router
- Dynamic imports for heavy components
- Route-based code splitting

### 2. Image Optimization

```typescript
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={400}
  height={300}
  priority={isAboveFold}
/>;
```

### 3. Font Optimization

```typescript
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
```

## Accessibility Patterns

### 1. Semantic HTML

- Use proper heading hierarchy
- Implement ARIA labels and descriptions
- Ensure keyboard navigation

### 2. Focus Management

- Visible focus indicators
- Logical tab order
- Skip links for main content

### 3. Screen Reader Support

- Descriptive alt text for images
- ARIA live regions for dynamic content
- Proper form labels and associations
