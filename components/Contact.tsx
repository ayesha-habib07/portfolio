'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'rumiasif77@gmail.com',
      href: 'mailto:rumiasif77@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 342 7059590',
      href: 'tel:+923427059590',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Hunza Gojal, Pakistan',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/rumi-asif',
      color: '#ffffff',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asif-rumi-0a4010157/',
      color: '#0077B5',
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/sho0_asif/',
      color: '#E4405F',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/923427059590',
      color: '#25D366',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:rumiasif77@gmail.com',
      color: '#01c16a',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-gradient rounded-2xl p-8 border border-[rgb(var(--border))]">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 bg-[rgb(var(--accent))]/10 rounded-lg group-hover:bg-[rgb(var(--accent))] transition-colors">
                        <info.icon className="w-6 h-6 text-[rgb(var(--accent))] group-hover:text-[rgb(var(--background))] transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-200 font-medium hover:text-[rgb(var(--accent))] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-gradient rounded-2xl p-8 border border-[rgb(var(--border))]">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Connect with Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-[rgb(var(--background))] rounded-xl border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-all group"
                      title={social.label}
                    >
                      <social.icon
                        className="w-7 h-7 text-gray-400 group-hover:text-[rgb(var(--accent))] transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-gradient rounded-2xl p-8 border border-[rgb(var(--border))] h-full flex flex-col justify-between relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">
                    Let's Work <span className="text-gradient">Together</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    I'm passionate about building scalable, high-performance
                    applications that solve real-world problems. Whether you need a
                    robust backend system, a full-stack solution, or technical
                    consulting, I'd love to hear about your project.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-[rgb(var(--background))]/50 rounded-xl border border-[rgb(var(--border))]">
                      <p className="text-[rgb(var(--accent))] font-semibold mb-1">
                        🚀 Available for
                      </p>
                      <p className="text-gray-300 text-sm">
                        Full-time positions, Contract work, and Freelance projects
                      </p>
                    </div>

                    <div className="p-4 bg-[rgb(var(--background))]/50 rounded-xl border border-[rgb(var(--border))]">
                      <p className="text-[rgb(var(--accent))] font-semibold mb-1">
                        ⚡ Quick Response
                      </p>
                      <p className="text-gray-300 text-sm">
                        I typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <a
                    href="mailto:rumiasif77@gmail.com"
                    className="block w-full py-4 bg-[rgb(var(--accent))] text-[rgb(var(--background))] rounded-lg font-semibold text-center hover:bg-[rgb(var(--accent-hover))] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(1,193,106,0.3)]"
                  >
                    Send Me an Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

