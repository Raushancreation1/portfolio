'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import ChartBot from './ChartBot';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <div className={`${inter.variable} min-h-screen bg-background text-foreground antialiased transition-colors duration-200`}>
        {children}
        {mounted && <ChartBot />}
      </div>
    </ThemeProvider>
  );
}
