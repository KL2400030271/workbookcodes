# 📘 Book Explorer with React Router and Props

A minimal SPA demonstrating React Router (v6), parent state with `useState`, prop drilling to reusable components, and dynamic routing via `useParams`.

## Features
- `/` home: list of books rendered via a reusable `<BookCard />`
- `/book/:id` detail: renders `<BookDetail />` using the `id` from URL
- Parent component (`App.jsx`) owns the `books` state and passes it as props
- Simulated API fetch using `useEffect` + `setTimeout`
- Graceful loading skeletons and 404-style “Book not found”

## Run locally
```bash
npm install
npm run dev
```
Then open the printed local URL in your browser.

## File structure
```
book-explorer-react/
├─ package.json
├─ vite.config.js
├─ index.html
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ data/books.js
   ├─ pages/Home.jsx
   └─ components/
      ├─ BookCard.jsx
      └─ BookDetail.jsx
```

## Screenshots to capture (for your submission)
- Home page with the list of books.
- Detail page at a route like `/book/2` showing title, author, description, rating.
```