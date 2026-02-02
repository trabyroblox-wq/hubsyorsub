# SUB v1 – Modern Anonymous Web Proxy

Beautiful, fast, no-logs web proxy frontend.

## Features

- Clean dark/neon design
- Custom background (`bgforprox.png`)
- Instant search bar + Enter support
- Popular quick-access buttons
- Mobile responsive

## How to use locally

1. Put your `bgforprox.png` into `public/`
2. Open `public/index.html` in any browser
3. (Optional) Run a local proxy backend and update `PROXY_BASE` in `proxy.js`

## Deployment

Recommended free options:

- **Netlify** / **Vercel** / **Cloudflare Pages** → drag & drop the `public/` folder
- GitHub Pages → set source to `/public`

## Backend

This is only the **frontend**.  
You need a proxy server backend (Node.js, Cloudflare Worker, FastAPI, etc.) to actually proxy requests.

Want a matching backend? → ask and I can give you a good one.

Enjoy SUB v1!
