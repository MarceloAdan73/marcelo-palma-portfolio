import { Oswald, Poppins } from 'next/font/google';
import type { Metadata } from "next";
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
  metadataBase: new URL('https://porfolio-next.vercel.app'),
  title: "Marcelo Palma | Desarrollador Full-Stack",
  description: "Portfolio profesional de Marcelo Palma - Full-Stack Developer",
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
        <AppProvider>
          {children}
          <FloatingControls />
        </AppProvider>
      </body>
    </html>
  );
}