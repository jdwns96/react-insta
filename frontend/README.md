## next 설치

```
npx create-next-app . --typescript
```

## tailwind

```
npm install -D tailwindcss postcss autoprefixer --force
npx tailwindcss init -p
```

### `tailwind.config.js`

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `globals.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
