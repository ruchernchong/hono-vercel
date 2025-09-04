# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal Hono web framework application configured for deployment on Vercel. The application is built with TypeScript and follows a serverless architecture pattern suitable for edge deployment.

## Common Development Commands

### Development
```bash
pnpm install
vc dev
```
Access the local development server at http://localhost:3000

### Build
```bash
pnpm install
vc build
```

### Deploy
```bash
pnpm install  
vc deploy
```

### Linting
```bash
npx eslint .
```

### Type Checking
```bash
npx tsc --noEmit
```

## Architecture

- **Entry Point**: `src/index.ts` - Main application file that exports the Hono app
- **Framework**: Hono.js - Fast, lightweight web framework optimized for edge runtime
- **Runtime**: Edge runtime (Vercel) - Designed for serverless deployment
- **Language**: TypeScript with strict mode enabled
- **JSX**: Configured to use Hono's JSX runtime (`hono/jsx`)

## Key Configuration

- **TypeScript**: Configured for ESNext with NodeNext module resolution
- **ESLint**: Basic JS configuration with unused vars and undefined variable warnings
- **Package Manager**: Uses pnpm (evident from pnpm-lock.yaml)
- **Deployment**: Vercel-specific setup requiring Vercel CLI

## Prerequisites

- Vercel CLI installed globally for development and deployment
- pnpm package manager