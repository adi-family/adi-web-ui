adi-web-ui, react, typescript, tailwind, vite, web-app

## Overview
- Web UI application for ADI family
- Built with React 19, TypeScript, and Tailwind CSS v4
- Vite for development and build tooling
- License: BSL-1.0

## Tech Stack
- React 19.2 with TypeScript
- Tailwind CSS v4 (CSS-based configuration)
- Vite 7 for fast development and optimized builds
- ESLint for code quality

## Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Design System
- Color palette: Deep violet/purple gradient theme matching ADI brand
- Uses Tailwind utility classes for all styling
- No custom CSS framework - pure Tailwind
- Responsive design mobile-first approach

## Code Guidelines
- Functional components with hooks only (no class components)
- TypeScript strict mode enabled
- Follow React best practices (hooks rules, component composition)
- Keep components pure and side-effect free when possible
- Use Tailwind classes instead of custom CSS
- NEVER use emojis in code - use Phosphor icons from https://phosphoricons.com if icons needed
