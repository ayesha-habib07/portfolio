'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import ExpandableText from './ExpandableText';
import Link from 'next/link';


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
    title: "AI-Powered Recipe Generator using LangGraph",
    period: "Dec 2025 - Jan 2026",
    description: "Built an AI-powered recipe generator that creates structured recipes based on user inputs like ingredients, category (veg/non-veg), and allergens. Implemented LangGraph to manage multi-step LLM workflows and integrated it with a Next.js frontend for a smooth user experience.",
    technologies: ["LangGraph", "Large Language Models (LLM)", "Prompt Engineering", "Next.js", "TypeScript", "API Integration", "State Management", "AI Workflow Orchestration"],
    link: "https://recipegeneratorlanggraph.netlify.app/",
    image: "/images/projects/langgraph-recipe.png",
    status: "completed",
  },
  {
    title: 'Cocaine Energy Suppliment',
    period: 'Sep 2025 - Nov 2025',
    description:
      'Built a full-stack e-commerce platform with role-based access control, admin approval workflows, dynamic pricing tiers, and guest checkout. Implemented secure authentication, email verification, and an admin dashboard for managing users, products, and orders. Utilized React, TypeScript, Supabase, and the Google Maps API for dynamic and responsive user experience.',
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'],
    link: 'https://drinkcocaine.com/',
    image: '/images/projects/cocaine.png',
    status: 'completed',
  },
  {
    title: '1800AUTOTOW.COM',
    period: 'Apr 2025 - March 2025',
    description:
      'Built a full-stack roadside assistance web application featuring real-time provider matching, GPS-based service requests, a bidding system, and multi-channel notifications.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Google Maps API', 'Real-time'],
    link: 'https://1800autotow.com',
    image: '/images/projects/autotow.webp',
    status: 'completed',
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

  {
    title: 'Bizviz - Real-Time Exploration Platform',
    period: 'Sep 2025 - Aug 2025',
    description: 'Developed the responsive frontend of Bizvis using Next.js and Tailwind CSS, translating Figma designs into a modern, interactive web experience. The platform allows users to explore restaurants, gyms, events, and more in real time, while helping businesses showcase their spaces and attract customers efficiently.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI Design'],
    link: 'https://bizvis-awd8.vercel.app/',
    image: '/images/projects/bizviz.png',
    status: 'completed',

  },
  {
    title: 'Kobba & Co – Expert Legal Solutions',
    period: 'Apr 2025 - March 2025',
    description: 'A React frontend for a legal services platform, providing users with clear, trustworthy information about attorneys and the legal process. Designed a responsive and user-friendly interface to ensure usability and transparency.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI Design'],
    link: 'https://kck-gamma.vercel.app/',
    image: '/images/projects/kck.png',
    status: 'completed',
  },
  {
    title: 'Global Trade Made Simple',
    period: 'March 2025 - April 2025',
    description: 'Designed and built the responsive frontend UI for a full-stack web app that streamlines international trade. The platform helps users manage import/export operations, track shipments, and handle customs documentation efficiently.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI Design'],
    link: 'https://cargo-tracking.netlify.app/',
    image: '/images/projects/cargo.png',
    status: 'completed',
  },

  {
    title: 'Learn Anything – Online Education Platform',
    period: 'Feb 2025 - March 2025',
    description: 'Created the responsive frontend UI for an online education website using React and Tailwind CSS. The platform showcases online courses, certificate programs, and expert-led learning, providing an engaging and user-friendly experience for learners.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI Design'],
    link: 'https://educational-react.netlify.app/',
    image: '/images/projects/educational.png',
    status: 'completed',
  }
];
interface ProjectsProps {
  limit?: number;
  showButton?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ limit, showButton = true }) => {
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
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative" ref={ref}>
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
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full"
              >
                <div className="card-gradient rounded-2xl p-5 sm:p-6 border border-[rgb(var(--border))] hover-lift h-full flex flex-col relative overflow-hidden">
                  {/* Status badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'ongoing'
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
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors break-words">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{project.period}</p>
                  </div>

                  {/* Description - grows to fill available space */}
                  <div className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow relative z-10">
                    <ExpandableText maxHeight={120}>
                      {project.description}
                    </ExpandableText>
                  </div>

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
          {/* Show More Button */}
          {limit && showButton && projects.length > limit && (
            <div className="mt-12 text-center">
              <Link href="/pages/projects">
                <button className="cursor-pointer px-6 py-3 bg-[rgb(var(--accent))] text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors">
                  Show More Projects
                </button>
              </Link>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

