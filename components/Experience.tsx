'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiMapPin, FiClock, FiTrendingUp } from 'react-icons/fi';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'UCONNECT TECHNOLOGIES PAKISTAN',
    role: 'Full Stack Developer',
    location: 'Gilgit, Pakistan',
    period: 'Dec 2021 - Present',
    type: 'Full-time',
    current: true,
  },
  {
    company: 'QUOHR',
    role: 'Lead Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Jan 2024 - May 2025',
    type: 'Full-time',
  },
  {
    company: 'QUINTUS VOYAGES',
    role: 'Full Stack Developer',
    location: 'Gojal Hunza, Pakistan',
    period: 'Jan 2024 - Apr 2025',
    type: 'Contract',
  },
  {
    company: 'GILGIT APP',
    role: 'Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Oct 2023 - Feb 2024',
    type: 'Contract',
  },
  {
    company: 'INVYCE.COM',
    role: 'Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Oct 2021 - Jun 2023',
    type: 'Contract',
  },
  {
    company: 'SKYSCRAPERS PVT LTD',
    role: 'SEO Executive',
    location: 'Islamabad, Pakistan',
    period: 'Sep 2021 - Nov 2021',
    type: 'Full-time',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[rgb(var(--accent))]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--accent))]/10 rounded-full border border-[rgb(var(--accent))]/20 mb-4">
              <FiTrendingUp className="w-4 h-4 text-[rgb(var(--accent))]" />
              <span className="text-[rgb(var(--accent))] text-sm font-semibold">Career Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {experiences.length} positions across {new Set(experiences.map(e => e.company)).size} companies, building scalable solutions
            </p>
          </motion.div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] h-full relative overflow-hidden transition-all duration-300 hover:border-[rgb(var(--accent))]/50">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/0 to-[rgb(var(--accent))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top section with badges */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex-1">
                      {exp.current && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgb(var(--accent))]/20 text-[rgb(var(--accent))] text-xs font-bold rounded-full mb-3 border border-[rgb(var(--accent))]/30 animate-pulse">
                          <span className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"></span>
                          CURRENT
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[rgb(var(--background))] rounded-lg border border-[rgb(var(--border))]">
                      <FiBriefcase className="w-3 h-3 text-[rgb(var(--accent))]" />
                      <span className="text-xs text-gray-400">{exp.type}</span>
                    </div>
                  </div>

                  {/* Company icon placeholder */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--accent))]/20 to-emerald-400/20 flex items-center justify-center border border-[rgb(var(--accent))]/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-[rgb(var(--accent))]">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Job title */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 font-medium text-sm mb-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FiClock className="w-4 h-4 text-[rgb(var(--accent))]/70" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FiMapPin className="w-4 h-4 text-[rgb(var(--accent))]/70" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={cardVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="card-gradient rounded-xl p-6 border border-[rgb(var(--border))] text-center">
              <div className="text-3xl font-bold text-gradient mb-1">{experiences.length}</div>
              <div className="text-sm text-gray-400">Positions</div>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-[rgb(var(--border))] text-center">
              <div className="text-3xl font-bold text-gradient mb-1">3+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-[rgb(var(--border))] text-center">
              <div className="text-3xl font-bold text-gradient mb-1">{new Set(experiences.map(e => e.company)).size}</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-[rgb(var(--border))] text-center">
              <div className="text-3xl font-bold text-gradient mb-1">100%</div>
              <div className="text-sm text-gray-400">Dedicated</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

