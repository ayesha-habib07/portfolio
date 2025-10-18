# Asif Ali - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design following 2025 web design trends
- **Dark Theme**: Eye-friendly dark mode with accent colors
- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Next.js 15 for optimal loading speeds

## 🎨 Design Highlights

- **Color Palette**: 
  - Background: Deep dark blue (#111827)
  - Accent: Bright green (#01c16a)
  - Clean, modern typography with Inter font family

- **Sections**:
  - Hero with animated introduction
  - About section with education and interests
  - Experience timeline
  - Featured projects showcase
  - Skills & technologies grid
  - Contact information

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your profile picture**:
   - Save your profile picture as `profile.jpg` in the `/public/images/` folder
   - Recommended size: 800x800px or larger (square aspect ratio)
   - Format: JPG or PNG

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)

## 📝 Customization

### Personal Information

All personal information is stored in the component files. To update:

- **Contact details**: Edit `/components/Contact.tsx`
- **Work experience**: Edit `/components/Experience.tsx`
- **Projects**: Edit `/components/Projects.tsx`
- **Skills**: Edit `/components/Skills.tsx`
- **About section**: Edit `/components/About.tsx`

### Colors

To change the color scheme, edit the CSS variables in `/app/globals.css`:

```css
:root {
  --background: 17 24 39;
  --foreground: 255 255 255;
  --accent: 1 193 106;
  --accent-hover: 1 169 93;
  --muted: 55 65 81;
  --border: 31 41 55;
  --card: 31 41 55;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact section
│   ├── Experience.tsx        # Work experience timeline
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero/landing section
│   ├── Navigation.tsx        # Navigation bar
│   ├── Projects.tsx          # Projects showcase
│   └── Skills.tsx            # Skills & technologies
├── public/
│   └── images/
│       └── profile.jpg       # Your profile picture (add this)
└── README.md
```

## 🎯 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Fast page load times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Asif Ali**
- Email: rumiasif77@gmail.com
- LinkedIn: [asif-rumi-0a4010157](https://www.linkedin.com/in/asif-rumi-0a4010157/)
- Location: Hunza Gojal, Pakistan

---

Made with ❤️ using Next.js & Framer Motion
