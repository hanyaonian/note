# Minimal Nuxt Note

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Milkdown](https://milkdown.dev/)

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm i
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# parallel
pnpm dev

# only web
pnpm --filter web dev
```

## Production

Build the application for production:

```bash
pnpm build

pnpm --fiter web build
```

Locally preview production build:

```bash
pnpm preview

pnpm --fiter web preview
```
