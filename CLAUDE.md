# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual institutional website for LOCUS, LDA - a Mozambican company specializing in environmental, social, and business consulting. The project is built with Next.js 14+ using App Router, TypeScript, TailwindCSS, and shadcn/ui components.

## Commands

### Initial Setup
```bash
# Create Next.js project with TypeScript and TailwindCSS
npx create-next-app@latest . --typescript --tailwind --app --eslint

# Install shadcn/ui
npx shadcn-ui@latest init

# Install internationalization
npm install next-intl
```

### Development Commands
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Testing
```bash
# Run tests (after setting up testing framework)
npm test

# Run tests in watch mode
npm run test:watch
```

## Architecture

### Internationalization Strategy
- Using `next-intl` for multilingual support (Portuguese and English)
- Locale routing with `/[locale]` dynamic segments
- Translation files in `/i18n` directory (pt.json and en.json)

### Component Architecture
- Reusable components in `/components` using shadcn/ui
- Page components in `/app/[locale]/` following Next.js App Router conventions
- Shared layout components (Navbar, Footer) with language switching capability

### Styling Guidelines
- TailwindCSS for all styling
- Color scheme: 
  - Dark green (#2e7d32) for titles
  - Black for body text
  - Follow shadcn/ui design system
- Responsive design required for all components

### Key Business Requirements
- Company: LOCUS, LDA (Mozambican environmental consulting firm)
- Services: Environmental consulting, emergency systems, business management, ISO standards, architecture, topographic engineering, stakeholder management
- Languages: Portuguese (primary) and English
- Professional design with emphasis on sustainability and innovation

### Content Structure
The website includes:
1. Home page with hero section
2. About Us (mission, vision, values)
3. Services (organized by categories)
4. Contact information
5. Language switcher in navigation

All content translations are provided in the prompt.md file.