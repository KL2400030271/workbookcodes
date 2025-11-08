# 📝 Feedback Collector with Redux Toolkit

## Overview
A feedback collection tool built using **React + Redux Toolkit** and **Tailwind CSS**.

### Features
- Rate sessions (1–5) and add optional comments.
- Validates that a rating is selected before submitting.
- Uses Redux Toolkit slice for global feedback state.
- Displays all feedback entries in real time.

### Technologies
- React 18
- Redux Toolkit
- Tailwind CSS
- Vite

### Run Instructions
```bash
npm install
npm run dev
```
Then open the local server URL printed in the terminal.

### File Structure
```
feedback-collector-redux/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    ├── store.js
    └── feedbackSlice.js
```
