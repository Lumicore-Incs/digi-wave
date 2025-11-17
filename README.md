# Digi Wave - Digital Agency Website

A modern, responsive single-page application built with **Next.js**, **React**, and **PrimeReact** for a digital agency showcase.

## 🚀 Features

- ✅ **Next.js 14** with App Router for better SEO and performance
- ✅ **Component-based architecture** (Header, Hero, About, Services, Contact, Footer)
- ✅ **PrimeReact UI library** with PrimeFlex for styling
- ✅ **Centralized design system** with CSS custom properties
- ✅ **Responsive design** mobile-first approach
- ✅ **Modern animations** and hover effects
- ✅ **SEO optimized** with proper meta tags and structure

## 🎨 Design System

### Color Palette

- **Primary**: Blue (`#2563eb`)
- **Secondary**: Gray scale
- **Accent**: Purple/Pink for highlights

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive scale from 0.75rem to 3rem
- **Weights**: Light (300) to Bold (700)

### Components

- **Buttons**: Primary, Secondary, Large, Small variants
- **Cards**: With hover effects and shadows
- **Forms**: Consistent input styling with focus states

## 📱 Sections

1. **Header** - Navigation with sticky positioning
2. **Hero** - Main landing section with CTA and stats
3. **About** - Company overview with service highlights
4. **Services** - Detailed service offerings with features
5. **Contact** - Contact form and company information
6. **Footer** - Links, social media, and company details

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Available Scripts

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page combining all sections
│   └── globals.css        # Global styles and design system
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Hero section with CTA
│   ├── About.jsx          # About section with services overview
│   ├── Services.jsx       # Detailed services section
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer with links and contact
└── .gitignore             # Git ignore rules
```

## 🎯 Performance Features

- **Server-Side Rendering (SSR)** with Next.js
- **Static Site Generation (SSG)** for better performance
- **Image optimization** (ready for implementation)
- **Code splitting** automatic with Next.js
- **CSS optimization** with production builds

## 📚 Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **PrimeReact 9** - UI component library
- **PrimeFlex** - CSS utility framework
- **PrimeIcons** - Icon library
- **Inter Font** - Modern typography

## 🎨 Customization

### Colors

Update CSS custom properties in `src/app/globals.css`:

```css
:root {
  --primary-600: #2563eb; /* Main brand color */
  --secondary-600: #475569; /* Text color */
  --accent-600: #c026d3; /* Accent color */
}
```

## 🔧 Next Steps

1. **Implement Figma Design** - Replace placeholder content with actual design
2. **Add Real Content** - Update text, images, and contact information
3. **Add Animations** - Implement scroll animations and micro-interactions
4. **SEO Optimization** - Add proper meta tags, structured data
5. **Performance** - Add image optimization and lazy loading
6. **Analytics** - Integrate Google Analytics or similar
7. **CMS Integration** - Add headless CMS for content management

## 📞 Support

For any questions or support, please contact the development team.

---

Built with ❤️ by the Digi Wave team
