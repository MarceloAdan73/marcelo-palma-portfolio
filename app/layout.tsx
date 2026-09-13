import { Oswald, Poppins } from 'next/font/google';
import type { Metadata } from "next";
import Script from 'next/script';
import { AppProvider } from '@/context/AppContext';
import FloatingControls from '@/components/FloatingControls';
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-oswald',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marcelo-palma-portfolio.vercel.app'),
  title: {
    default: "Marcelo Palma | Desarrollador Full-Stack",
    template: "%s | Marcelo Palma",
  },
  description: "Portfolio de Marcelo Palma - Full-Stack Developer especializado en Next.js, TypeScript, Node.js, Docker y testing.",
  openGraph: {
    type: 'website',
    url: 'https://marcelo-palma-portfolio.vercel.app',
    siteName: 'Marcelo Palma',
    title: 'Marcelo Palma | Desarrollador Full-Stack',
    description: 'Construyo soluciones completas: full-stack con Next.js, TypeScript, Node, Docker y testing real.',
    locale: 'es_AR',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/me.jpg',
        width: 512,
        height: 640,
        alt: 'Marcelo Palma - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Marcelo Palma | Desarrollador Full-Stack',
    description: 'Construyo soluciones completas: full-stack con Next.js, TypeScript, Node, Docker y testing real.',
    images: ['/me.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
      en: '/',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marcelo Palma',
  jobTitle: 'Desarrollador Full-Stack',
  url: 'https://marcelo-palma-portfolio.vercel.app',
  image: 'https://marcelo-palma-portfolio.vercel.app/me.jpg',
  sameAs: [
    'https://github.com/MarceloAdan73',
    'https://linkedin.com/in/marcelo-adan-palma',
  ],
  knowsAbout: [
    'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker',
    'React', 'Testing', 'API REST', 'JWT',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${poppins.variable} ${oswald.variable}`}
      data-scroll-behavior="smooth"  
      suppressHydrationWarning
    >
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else if(t==='light'){document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProvider>
          {children}
          <FloatingControls />
        </AppProvider>
      </body>
    </html>
  );
}