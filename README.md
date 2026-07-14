# RobyFactory website

Single-page website for RobyFactory, a custom 3D printing and CAD design studio in Worcester, UK.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static website is generated in `out/`. The included GitHub Actions workflow publishes it to GitHub Pages after every push to `main`.

The contact form is currently a visual demo and does not send messages.
