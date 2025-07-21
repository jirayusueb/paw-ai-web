# Technical Context: Paw AI Web

## Technologies Used

### Core Framework

- **Next.js 15.4.2**: App Router with Turbopack for development
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Strict type checking and modern features

### Styling & UI

- **Tailwind CSS v4**: Latest version with new features
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional class names
- **tailwind-merge**: Smart class merging
- **Lucide React**: Modern icon library

### Development Tools

- **Biome 2.1.2**: Fast linter and formatter
- **Ultracite 5.0.46**: AI-friendly code quality tool
- **Bun**: Package manager and runtime

### Theme & State

- **next-themes**: Theme management with forced dark mode
- **@ebay/nice-modal-react**: Modal management
- **@/components/ui/sonner**: Toast notifications

## Development Setup

### Prerequisites

- Node.js 18+ or Bun
- Git
- VS Code (recommended)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd paw-ai-web

# Install dependencies
bun install

# Start development server
bun dev
```

### Available Scripts

- `bun dev`: Start development server with Turbopack
- `bun build`: Build for production
- `bun start`: Start production server
- `bun lint`: Run Biome linting
- `bun lint:fix`: Fix linting issues
- `bun format`: Format code with Biome
- `bun format:check`: Check code formatting
- `bun ultracite:format`: Run Ultracite formatting
- `bun ultracite:lint`: Run Ultracite linting

## Technical Constraints

### Performance

- Lighthouse Performance Score: 95+
- Core Web Vitals: All green
- Bundle size optimization required
- Image optimization with Next.js Image component

### Accessibility

- WCAG 2.1 AA compliance required
- Screen reader compatibility
- Keyboard navigation support
- Color contrast ratios
- Focus management

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement

### Type Safety

- Strict TypeScript configuration
- No `any` types allowed
- Comprehensive type definitions
- Interface over type preference

## Dependencies

### Production Dependencies

```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.525.0",
  "next": "15.4.2",
  "next-themes": "0.4.6",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "tailwind-merge": "^3.3.1"
}
```

### Development Dependencies

```json
{
  "@biomejs/biome": "2.1.2",
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.3.5",
  "typescript": "^5",
  "ultracite": "5.0.46"
}
```

## Configuration Files

- `tsconfig.json`: TypeScript configuration with @/\* alias
- `next.config.ts`: Next.js configuration
- `biome.jsonc`: Biome linting and formatting rules
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.mjs`: PostCSS configuration
