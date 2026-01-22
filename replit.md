# Ascension Private Mentorship Landing Page

## Overview

A premium, high-converting single-page landing page for "Ascension Private Mentorship" - an exclusive 1:1 coaching program targeting men (25-50) seeking self-mastery, discipline, and identity transformation. The application uses a React frontend with Express backend, featuring a dark, cinematic, and elite design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom dark theme configuration
- **UI Components**: shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server middleware integration for HMR

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Drizzle Kit with output to `./migrations`
- **Storage Pattern**: Interface-based storage abstraction (`IStorage`) with in-memory implementation for development

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── attached_assets/  # Static assets and requirements
```

### Design System
- **Theme**: Dark mode by default with gold/amber accent colors
- **Typography**: Inter (sans-serif) and Playfair Display (serif)
- **Color Palette**: HSL-based CSS variables for consistent theming
- **Component Style**: Radix UI primitives with custom styling

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Libraries
- **Radix UI**: Complete primitive component set (dialog, accordion, tabs, etc.)
- **Embla Carousel**: Carousel functionality
- **cmdk**: Command palette component
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build and dev server
- **esbuild**: Server-side bundling for production
- **Drizzle Kit**: Database migration tooling

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **drizzle-zod**: Drizzle to Zod schema generation