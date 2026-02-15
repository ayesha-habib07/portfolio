'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[rgb(var(--accent))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left side - Text content */}
        <div className="order-2 md:order-1 space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-[rgb(var(--accent))] text-lg font-medium">
              Hi there, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Ayesha Habib
            </h1>
            {/* <p className="text-lg sm:text-xl md:text-2xl text-[rgb(var(--accent))] font-semibold">
              (Arif Ali Koyani)
            </p> */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400">
              Frontend Developer & Agentic Chatbot Developer
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Frontend Developer with <span className="text-gradient font-semibold">2+ years of experience </span>
            building responsive and scalable web applications using
            <span className="text-gradient font-semibold"> Next.js</span>,
            <span className="text-gradient font-semibold"> React</span>, and
            <span className="text-gradient font-semibold"> TypeScript</span>.

            I develop agentic chatbot systems using
            <span className="text-gradient font-semibold"> LangChain</span> and
            <span className="text-gradient font-semibold"> LangGraph</span>,
            implementing RAG workflows and vector-based search.

            Currently expanding my backend expertise with
            <span className="text-gradient font-semibold"> Python</span> to build scalable APIs and backend systems.
          </motion.p>


          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <a
              href="https://github.com/ayesha-habib07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="GitHub"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayesha-habib-5ba15225a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            {/* <a
              href="https://www.fiverr.com/ali_arif_96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="Fiverr"
            >
              <SiFiverr className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/sho0_arif/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="Instagram"
            >
              <FiInstagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a> */}
            <a
              href="mailto:ayeshahabib465@gmail.com"
              className="p-2.5 sm:p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="Email"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/03555803561"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-[rgb(var(--card))] rounded-lg hover:bg-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1 group"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <a
              href="#contact"
              className="px-5 sm:px-8 py-2.5 sm:py-3 bg-[rgb(var(--accent))] text-[rgb(var(--background))] rounded-lg text-sm sm:text-base font-semibold hover:bg-[rgb(var(--accent-hover))] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(1,193,106,0.3)]"
            >
              Get in Touch
            </a>
            <a
              href="./CVV.pdf"
              download="Ayesha_Habib_CV.pdf"
              className="px-5 sm:px-8 py-2.5 sm:py-3 border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg text-sm sm:text-base font-semibold hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--background))] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Download CV</span>
              <span className="xs:hidden">CV</span>
            </a>
            <a
              href="#projects"
              className="px-5 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-500 text-gray-300 rounded-lg text-sm sm:text-base font-semibold hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] transition-all duration-300 hover:-translate-y-1"
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* Right side - Profile Image */}
        <motion.div
          variants={imageVariants}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 rounded-full blur-3xl opacity-20"></div>

            {/* Image container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[rgb(var(--accent))] shadow-2xl shadow-[rgba(1,193,106,0.2)]">
              <Image
                src="./images/PP.jpeg"
                alt="Ayesha Habib - Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-[rgb(var(--card))] border-2 border-[rgb(var(--accent))] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-6 sm:py-3 shadow-lg"
            >
              <p className="text-xs sm:text-sm font-semibold text-gray-300">
                <span className="text-gradient text-xl sm:text-2xl">2+</span> <span className="hidden xs:inline">Years</span><span className="xs:hidden">Yrs</span>
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400">Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

