'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: 'UCONNECT TECHNOLOGIES PAKISTAN',
    role: 'Full Stack Developer',
    location: 'Gilgit, Pakistan',
    period: 'Dec 2021 - Present',
    current: true,
  },
  {
    company: 'QUOHR',
    role: 'Lead Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Jan 2024 - May 2025',
  },
  {
    company: 'GILGIT APP',
    role: 'Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Oct 2023 - Feb 2024',
  },
  {
    company: 'INVYCE.COM',
    role: 'Backend Developer',
    location: 'Gilgit, Pakistan',
    period: 'Oct 2021 - Jun 2023',
  },
  {
    company: 'SKYSCRAPERS PVT LTD',
    role: 'SEO Executive',
    location: 'Islamabad, Pakistan',
    period: 'Sep 2021 - Nov 2021',
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(var(--accent))] via-emerald-400 to-[rgb(var(--accent))] transform -translate-x-1/2"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(var(--accent))] rounded-full border-4 border-[rgb(var(--background))] z-10 shadow-lg shadow-[rgba(1,193,106,0.3)]">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-[rgb(var(--accent))] animate-ping"></span>
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift group">
                      {/* Current badge */}
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-[rgb(var(--accent))]/20 text-[rgb(var(--accent))] text-xs font-semibold rounded-full mb-3 border border-[rgb(var(--accent))]/30">
                          Current Position
                        </span>
                      )}

                      <h3 className="text-xl font-bold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <FiBriefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

