# Vibe Code Documentation Site

A beautiful, spatial documentation site with smooth animations and glassmorphism design, built to teach beginners how to start coding with AI.

## ✨ Features

- **Spatial Design**: 3D effects, depth layers, and glassmorphism
- **Animated Gradients**: Infinite animated gradient orbs in the background
- **Interactive Tutorial**: 17-part accordion-based tutorial with progress tracking
- **Code Syntax Highlighting**: Beautiful code blocks with copy functionality
- **Dark Mode**: Optimized for dark mode with purple/blue gradient theme
- **Fully Responsive**: Mobile-optimized with collapsible sidebar
- **Smooth Animations**: Framer Motion animations throughout

## 🚀 Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Framer Motion** - Smooth animations and transitions
- **next-themes** - Dark mode support
- **react-syntax-highlighter** - Code syntax highlighting
- **Lucide Icons** - Icon system

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project
cd vibe-coding-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
vibe-coding-site/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   └── tutorial/
│       └── page.tsx        # Tutorial page
├── components/
│   ├── ui/                 # shadcn components
│   ├── layout/
│   │   ├── AnimatedGradient.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeProvider.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   └── Features.tsx
│   └── tutorial/
│       ├── CodeBlock.tsx
│       ├── Sidebar.tsx
│       ├── TutorialAccordion.tsx
│       └── TutorialContent.tsx
├── lib/
│   ├── parseTutorial.ts   # Parse markdown tutorial
│   └── utils.ts           # Utilities
├── content/
│   └── tutorial.md        # Tutorial content
└── public/                # Static assets
```

## 🎨 Design System

### Colors

- **Primary**: Purple (#8B5CF6) to Blue (#3B82F6) gradient
- **Secondary**: Cyan (#06B6D4)
- **Background**: Dark slate (#0F172A, #1E293B)
- **Glass effects**: `rgba(255, 255, 255, 0.05)` with backdrop blur

### Glassmorphism Classes

```css
.glass - Base glass effect
.glass-dark - Dark glass variant
.glass-card - Enhanced glass for cards
```

## 🔧 Customization

### Updating Tutorial Content

Edit `/content/tutorial.md` with markdown content. The parser will automatically split it into sections based on `## PART X:` headings.

### Changing Colors

Update CSS variables in `/app/globals.css` under the `.dark` selector.

### Adding New Pages

Create new pages in the `/app` directory following Next.js App Router conventions.

## 📱 Responsive Design

- **Desktop**: Sticky sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Floating menu button with slide-in sidebar

## 🎬 Animations

All animations use Framer Motion:
- **Hero**: Fade in + slide up
- **Cards**: 3D hover effects with rotation
- **Accordions**: Smooth expand/collapse
- **Gradients**: Infinite looping animations

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📝 License

MIT

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Made with 💜 for aspiring vibe coders
