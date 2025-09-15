'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <FaGithub className="h-5 w-5" />, 
      href: 'https://github.com/raushancreation1',
      label: 'GitHub'
    },
    { 
      icon: <FaLinkedin className="h-5 w-5" />, 
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    // { 
    //   icon: <FaTwitter className="h-5 w-5" />, 
    //   href: 'https://twitter.com/yourusername',
    //   label: 'Twitter'
    // },
    { 
      icon: <FaEnvelope className="h-5 w-5" />, 
      href: 'mailto:raushancreationmuz@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Raushan Kumar</h2>
            <p className="text-gray-400 mt-2">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
