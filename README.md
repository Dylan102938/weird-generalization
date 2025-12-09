# Weird Generalization - Research Blog

A static blog-style website built with React Router and Tailwind CSS, following the Anthropic alignment blog template style.

## Features

- 📝 Clean, readable article layout
- 🎨 Aesthetic styling for markdown components
- 📱 Fully responsive (desktop & mobile)
- 🌙 Dark mode support
- 🖼️ Placeholder images that are easily swappable
- ⚡ Fast, static site generation

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Customizing Content

### Updating the Blog Post

The main blog post content is in `app/routes/home.tsx`. You can modify:

- **Title and subtitle**: Update the `title` and `subtitle` props on `BlogLayout`
- **Authors and affiliations**: Update the `authors` and `affiliations` props
- **Date**: Update the `date` prop
- **Content**: Edit the JSX content within the `BlogLayout` component

### Swapping Images

Images use the `PlaceholderImage` component. To swap a placeholder for a real image:

1. Add your image to the `public/` folder (e.g., `public/images/figure1.png`)
2. Update the `src` prop:

```tsx
<PlaceholderImage
  src="/images/figure1.png" // Add your image path
  alt="Figure 1: Overview"
  caption="Your caption here"
/>
```

### Available Components

- **`PlaceholderImage`**: Image with caption and placeholder support
- **`Figure`**: Generic figure wrapper with caption
- **`TLDR`**: Summary box at the top of articles
- **`Links`**: Paper/code/blog links section
- **`Callout`**: Info/warning/tip callout boxes

## Styling

The site uses Tailwind CSS v4. Custom article styles are in `app/app.css` under the `.prose-article` class.

## Building for Production

```bash
npm run build
```

## License

MIT
