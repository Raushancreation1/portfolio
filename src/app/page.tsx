'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Charts from '@/components/Charts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const smoothScroll = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      // Only handle internal links that start with #
      if (!href || !href.startsWith('#')) {
        return; // Let the browser handle external links normally
      }
      
      e.preventDefault();
      const targetId = href;
      const element = document.querySelector(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update URL without page reload
        if (history.pushState) {
          history.pushState(null, '', targetId);
        } else {
          window.location.hash = targetId;
        }
      }
    };

    // Add event listeners to all internal anchor links
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchorLinks.forEach(link => {
      // Only add listener if it's an internal link
      if (link.getAttribute('href')?.startsWith('#')) {
        link.addEventListener('click', smoothScroll);
      }
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Charts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
