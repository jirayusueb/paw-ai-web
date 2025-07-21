# Project Brief: Paw AI Web

## Project Overview

Paw AI Web is a Next.js 15 application built with TypeScript, focusing on AI-powered features with a modern, accessible design system.

## Core Requirements

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict type safety
- **Styling**: Tailwind CSS v4 with custom design system
- **Theme**: Dark mode by default with next-themes
- **Code Quality**: Biome for linting and formatting
- **Structure**: src/ directory with @/\* alias

## Key Goals

1. **Performance**: Subsecond performance with Turbopack
2. **Accessibility**: WCAG compliant with comprehensive a11y support
3. **Type Safety**: Maximum TypeScript coverage with strict settings
4. **Developer Experience**: Zero configuration, AI-friendly code generation
5. **Modern UI**: Beautiful, responsive design with dark theme

## Technical Stack

- **Frontend**: React 19, Next.js 15, TypeScript 5
- **Styling**: Tailwind CSS v4, class-variance-authority, clsx
- **Icons**: Lucide React
- **Code Quality**: Biome, Ultracite
- **Theme**: next-themes with forced dark mode
- **UI Components**: Custom design system with shadcn/ui patterns

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── lib/           # Utility functions and configurations
└── components/    # Reusable UI components
```

## Development Principles

- Functional programming patterns over classes
- Server Components by default, Client Components when needed
- Comprehensive error handling and validation
- Performance optimization with Web Vitals focus
- Accessibility-first design approach
