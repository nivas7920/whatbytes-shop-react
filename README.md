
# Whatbytes Frontend Assignment – React + Tailwind

This repo implements the assignment using **React (Vite)** and **Tailwind CSS**.

## Features
- Home page with **filters** (category, price, optional brand), **search** and **URL params**.
- **Responsive grid** (3/2/1 cols) and product cards (image, title, price, rating, quick add).
- Product detail page (`/product/:id`) with qty + Add to Cart.
- Bonus **Cart page** with update/remove/summary.
- **Cart state** via Context + **localStorage** persistence.
- Icons from `lucide-react`.

## Run locally
```bash
npm install
npm run dev
# open the printed localhost URL
```

## URL parameters
- `?q=<term>` — search by title
- `?category=electronics|clothing|home`
- `?price=<0..1000>` — max price
- `?brand=<Runner|Soundify|...>` (optional)

## Deploy
- Vercel/Netlify compatible. For Vercel, set framework to **Vite** (React) and build command `npm run build`.

## Commit plan (example)
- feat: scaffold vite + tailwind
- feat: layout header/search/cart/footer
- feat: product data & cards
- feat: filters + URL params
- feat: product detail + qty
- feat: cart context + localStorage
- feat: cart page summary
- chore: UI polish & docs
