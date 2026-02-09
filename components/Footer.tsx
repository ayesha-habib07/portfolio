'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[rgb(var(--border))] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--accent))]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base text-center md:text-left"
          >
            © {currentYear} Arif Ali. All rights reserved.
          </motion.p>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm sm:text-base text-center"
          >
            <span className="hidden sm:inline">Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <FiHeart className="text-[rgb(var(--accent))]" fill="currentColor" />
            </motion.div>
            <span className="hidden sm:inline">using</span>
            <span>Next.js & Framer Motion</span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base"
          >
            <a
              href="#about"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

