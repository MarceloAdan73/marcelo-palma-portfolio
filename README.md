# Marcelo Palma - Professional Portfolio

<div align="center">
  
[![Live Demo](https://img.shields.io/badge/🌐%20View%20Portfolio-00c9b7?style=for-the-badge&labelColor=1e293b)](https://marcelo-palma-portfolio.vercel.app)
[![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/MarceloAdan73/marcelo-palma-portfolio)

**Full Stack Developer** | React & Next.js Specialist | Buenos Aires, Argentina

*Crafting elegant digital experiences with modern web technologies.*

</div>

---

## 📌 About This Project

This is my **professional portfolio** – a showcase of my skills in modern web development. It's not just a website; it's a **fully-tested, accessible, and performant application** built with cutting-edge technologies.

### 🎯 What You'll Find Here
- **Live Portfolio**: Interactive showcase of my work
- **Well-Structured Code**: Clean architecture and best practices
- **Full Test Coverage**: Accessibility tests and integration tests
- **Responsive Design**: Beautiful on all devices
- **Dark Mode**: Seamless theme switching

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Next.js | 16.0.3 |
| **Language** | TypeScript | 5.x |
| **Styling** | TailwindCSS | 4.x |
| **Animations** | Framer Motion | 12.34.3 |
| **Testing** | Jest + React Testing Library | Latest |
| **Quality** | ESLint | Latest |

---

## 📂 Project Structure

```
📦 marcelo-palma-portfolio
├── 📂 app/                          # Next.js App Router
│   ├── 📄 layout.tsx                # Root layout with providers
│   ├── 📄 page.tsx                  # Home page (Server Component)
│   └── 📄 globals.css               # Global styles
├── 📂 components/                   # React components
│   ├── 📄 Hero.tsx                  # Landing section
│   ├── 📄 Skills.tsx                # Skills showcase
│   ├── 📄 Projects.tsx              # Portfolio projects
│   ├── 📄 FloatingControls.tsx      # Theme/Language switcher
│   └── 📂 __tests__/                # Component tests
├── 📂 context/                      # Global state
│   ├── 📄 AppContext.tsx            # App context (theme, language)
│   └── 📂 __tests__/                # Context tests
├── 📂 types/                        # TypeScript types
├── 📂 public/                       # Static assets
├── 📄 package.json                  # Dependencies
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 jest.config.js                # Jest configuration
└── 📄 README.md                     # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarceloAdan73/marcelo-palma-portfolio.git
cd marcelo-palma-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Testing
npm test                 # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
```

---

## 🧪 Testing & Quality

### Test Coverage
- ✅ **Global Context**: 100% coverage
- ✅ **Accessibility**: WCAG AA compliant
- ✅ **Integration Tests**: All major components tested
- ✅ **E2E Ready**: Set up for Cypress/Playwright

### Running Tests

```bash
# All tests
npm test

# Watch mode (development)
npm run test:watch

# Coverage report
npm run test:coverage

# Accessibility audit
npm test -- -t "accessibility"
```

---

## ♿ Accessibility

This portfolio is built with **accessibility first**:

✅ **Keyboard Navigation** - Fully navigable without a mouse  
✅ **Semantic HTML** - Proper use of semantic elements  
✅ **ARIA Labels** - Descriptive labels for screen readers  
✅ **Color Contrast** - WCAG AA compliant in light & dark mode  
✅ **Focus Management** - Clear focus indicators  
✅ **Tested** - jest-axe automated accessibility tests  

---

## 🎨 Features

### 🌙 Dark Mode
Seamless theme switching with persistent state using localStorage.

### 🎬 Smooth Animations
Framer Motion animations that enhance UX without overwhelming.

### 📱 Responsive Design
Mobile-first approach - looks great on all screen sizes.

### ⚡ Performance
- Optimized images
- Code splitting
- Server Components where possible
- Minimal JavaScript

### 🌍 i18n Ready
Context setup for multiple language support.

---

## 📝 Code Highlights

### TypeScript First
All components and utilities are fully typed for safety and better DX.

```typescript
// Example: Fully typed component
interface SkillProps {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skill: React.FC<SkillProps> = ({ name, level, category }) => {
  // Implementation
};
```

### Context API for State Management
Global state management without external dependencies.

```typescript
// App context with theme and language
const { theme, setTheme, language, setLanguage } = useAppContext();
```

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys on push
# Or connect your repo at vercel.com
```

---

## 📊 Performance Metrics

- **Lighthouse Score**: 90+
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with code splitting
- **Performance**: <2s initial load

---

## 🤝 Contributing

While this is a personal portfolio, I appreciate feedback and suggestions!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Write tests for new features
5. Submit a pull request

### Code Standards
- Follow the existing code style
- Write tests for new features
- Ensure all tests pass
- Update documentation as needed

---

## 📚 Learning Resources

This project implements best practices from:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📬 Get In Touch

Interested in collaborating? Let's connect!

<div align="center">

[![Email](https://img.shields.io/badge/Email-marcelo--palma@live.com-00c9b7?style=flat-square&logo=gmail)](mailto:marcelo-palma@live.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Marcelo%20Palma-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/marcelo-palma-083b69352/)
[![GitHub](https://img.shields.io/badge/GitHub-@MarceloAdan73-181717?style=flat-square&logo=github)](https://github.com/MarceloAdan73)

**Available for**: Freelance projects • Full-time opportunities • Collaborations

📍 Bahía Blanca, Argentina

</div>

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio.

---

<div align="center">

**Built with ❤️ by [Marcelo Palma](https://github.com/MarceloAdan73)**

[⬆️ Back to Top](#marcelo-palma---professional-portfolio)

</div>