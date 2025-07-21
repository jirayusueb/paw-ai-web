# Folder Structure: Paw AI Web

## Root Directory

```
paw-ai-web/
├── .next/                    # Next.js build output
├── .git/                     # Git repository
├── .vscode/                  # VS Code settings
├── .cursor/                  # Cursor IDE settings
├── .claude/                  # Claude AI settings
├── .kiro/                    # Kiro AI settings
├── memory-bank/              # Project documentation
├── node_modules/             # Dependencies
├── public/                   # Static assets
├── src/                      # Source code (main directory)
├── biome.jsonc               # Biome configuration
├── bun.lock                  # Bun lock file
├── components.json           # shadcn/ui configuration
├── next-env.d.ts            # Next.js TypeScript definitions
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── pnpm-lock.yaml          # pnpm lock file
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

## Source Directory (`src/`)

```
src/
├── app/                     # Next.js App Router pages
│   ├── client-provider.tsx  # Client-side providers
│   ├── favicon.ico         # Site favicon
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── components/              # Reusable UI components
│   └── ui/                 # Base UI components (shadcn/ui)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── containers/              # Page-level components
│   └── home-page/          # Home page container
│       ├── index.tsx       # Home page main component
│       └── layout.tsx      # Home page layout
├── hooks/                   # Custom React hooks
│   └── use-mobile.ts       # Mobile detection hook
└── lib/                     # Utility functions and configurations
    ├── theme-provider.tsx  # Theme management
    └── utils.ts            # General utilities
```

## Memory Bank Directory (`memory-bank/`)

```
memory-bank/
├── projectbrief.md         # Foundation document
├── product-context.md      # Why project exists
├── tech-context.md         # Technologies and setup
├── system-patterns.md      # Architecture and patterns
├── active-context.md       # Current work focus
├── progress.md             # What works and what's left
└── folder-structure.md     # This file
```

## Public Directory (`public/`)

```
public/
├── file.svg               # File icon
├── globe.svg              # Globe icon
├── next.svg               # Next.js logo
├── vercel.svg             # Vercel logo
└── window.svg             # Window icon
```

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)

- Strict mode enabled
- `@/*` alias pointing to `src/*`
- Next.js App Router support
- Modern ES features

### Next.js Configuration (`next.config.ts`)

- App Router enabled
- Source directory set to `src/`
- Turbopack for development

### Biome Configuration (`biome.jsonc`)

- Fast linting and formatting
- TypeScript support
- Accessibility rules
- Performance optimizations

### Package Configuration (`package.json`)

- Bun as package manager
- Next.js 15 with React 19
- Tailwind CSS v4
- next-themes for dark mode
- Biome and Ultracite for code quality

## Key Patterns

### Import Aliases

- `@/*` → `src/*`
- Clean, consistent import paths
- TypeScript path mapping

### Component Organization

- `components/ui/` for base components
- `containers/` for page-level components
- `hooks/` for custom React hooks
- `lib/` for utilities and configurations

### File Naming

- kebab-case for directories
- PascalCase for components
- camelCase for utilities
- Descriptive, semantic names

### Architecture

- Server Components by default
- Client Components when needed
- App Router structure
- Progressive enhancement
