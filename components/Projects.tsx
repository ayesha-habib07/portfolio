'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
  status?: 'ongoing' | 'completed';
  image?: string;
}

const projects: Project[] = [
  {
    title: '1800AUTOTOW.COM',
    period: 'Apr 2025 - Present',
    description:
      'Built a full-stack roadside assistance web application featuring real-time provider matching, GPS-based service requests, a bidding system, and multi-channel notifications. Utilized React, TypeScript, Supabase, and the Google Maps API for dynamic and responsive user experience.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Google Maps API', 'Real-time'],
    link: 'https://1800autotow.com',
    image: '/images/projects/autotow.webp',
    status: 'ongoing',
  },
  {
    title: 'MBAROOFING',
    period: 'Apr 2025 - Jun 2025',
    description:
      'Developed and maintained a full-stack CRM platform for a roofing company, integrating Supabase, Deno Edge Functions, and a modern React frontend for seamless lead and client management.',
    technologies: ['React', 'Supabase', 'Deno', 'Edge Functions', 'CRM'],
    link: 'https://mbaroofing.com',
    image: '/images/projects/mbaroofing.webp',
    status: 'completed',
  },
  {
    title: 'Theo AI',
    period: 'Jul 2023 - Oct 2023',
    description:
      'Worked as a Backend Developer on Theo AI, a project focused on environmental changes and their impact on Sweden. Responsibilities included attending daily standups, delivering tasks on time, creating REST APIs, and fixing bugs.',
    technologies: ['Node.js', 'Express', 'REST API', 'MongoDB', 'Backend'],
    link: 'https://app.theo.ai',
    image: '/images/projects/theo-ai.webp',
    status: 'completed',
  },
];

const Projects = () => {
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

  return (
    <section id="projects" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recent projects I've built, from concept to deployment
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full"
              >
                <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift h-full flex flex-col relative overflow-hidden">
                  {/* Status badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          project.status === 'ongoing'
                            ? 'bg-[rgb(var(--accent))]/20 text-[rgb(var(--accent))] border border-[rgb(var(--accent))]/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                  )}

                  {/* Background decoration */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[rgb(var(--accent))]/5 rounded-full blur-3xl group-hover:bg-[rgb(var(--accent))]/10 transition-all duration-500"></div>

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-[rgb(var(--background))] z-10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Project title and period */}
                  <div className="mb-4 relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{project.period}</p>
                  </div>

                  {/* Description - grows to fill available space */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow relative z-10">
                    {project.description}
                  </p>

                  {/* Bottom section - Technologies and Link - stays at bottom */}
                  <div className="mt-auto relative z-10">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[rgb(var(--background))] text-[rgb(var(--accent))] rounded-lg text-sm border border-[rgb(var(--border))]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.link && (
                      <div className="flex gap-4 pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-emerald-400 transition-colors group/link"
                        >
                          <FiExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                          <span className="font-medium">View Project</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

