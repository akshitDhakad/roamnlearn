# RomanLearn - Educational Website

A modern, responsive educational platform built with React, TypeScript, Material UI, and Tabler Icons.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI (MUI)** - Component library
- **Tabler Icons** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **Emotion** - CSS-in-JS (required by MUI)

## 📁 Project Structure

```
clinet/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header/          # Top navigation bar
│   │   ├── Sidebar/         # Side navigation drawer
│   │   ├── Footer/          # Footer component
│   │   ├── Layout/          # Main layout wrapper
│   │   └── index.ts         # Component exports
│   ├── pages/               # Page components
│   │   ├── Home/            # Home page
│   │   └── index.ts         # Page exports
│   ├── theme/               # Material UI theme configuration
│   │   └── theme.ts         # Theme settings
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared types
│   ├── utils/               # Utility functions and constants
│   │   └── constants.ts     # App-wide constants
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies
└── vite.config.ts           # Vite configuration
```

## 🎨 Features

- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Material UI Components** - Beautiful, accessible components
- ✅ **Tabler Icons** - Modern icon set
- ✅ **TypeScript** - Full type safety
- ✅ **Clean Architecture** - Well-organized folder structure
- ✅ **Theme System** - Customizable Material UI theme
- ✅ **Layout System** - Header, Sidebar, and Footer components
- ✅ **Best Practices** - Senior-level code quality

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Component Architecture

### Layout Component

The main layout wrapper that includes:

- **Header**: Sticky navigation bar with search, notifications, and user menu
- **Sidebar**: Responsive drawer navigation (persistent on desktop, temporary on mobile)
- **Footer**: Footer with links and social media

### Theme Configuration

Custom Material UI theme with:

- Primary and secondary color schemes
- Typography settings
- Component overrides
- Consistent spacing and borders

## 🎯 Best Practices Implemented

1. **Component Organization**: Components are organized by feature in their own folders
2. **Type Safety**: Full TypeScript coverage with proper interfaces
3. **Code Reusability**: Centralized constants and utilities
4. **Responsive Design**: Mobile-first approach with Material UI breakpoints
5. **Accessibility**: Semantic HTML and ARIA labels
6. **Performance**: Optimized imports and component structure
7. **Documentation**: JSDoc comments for key components

## 🔧 Customization

### Changing Colors

Edit `src/theme/theme.ts` to customize the color scheme:

```typescript
palette: {
  primary: {
    main: '#1976d2', // Your primary color
  },
  // ...
}
```

### Adding Navigation Items

Edit `src/utils/constants.ts`:

```typescript
export const NAVIGATION_ITEMS = [
  { id: "new-item", label: "New Item", path: "/new", icon: "icon-name" },
  // ...
];
```

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development

Built with best practices for:

- Code maintainability
- Scalability
- Performance
- User experience
