'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiSqlite,
  SiOpenai,
  SiZapier,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiShadcnui,
  SiVectorlogozone,
  SiPython,
  SiPinescript,

} from 'react-icons/si';
import { IconType } from 'react-icons';
import { GiArtificialIntelligence } from "react-icons/gi";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: IconType; color: string }[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'MUI', icon: SiMui, color: '#007FFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Shadcn UI', icon: SiShadcnui, color: '#000000' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Agentic AI & LLM Development',
    skills: [
      { name: "LangChain", icon: SiPython, color: "#3776AB" },
      { name: 'LangGraph', icon: SiPython, color: '#3776AB' },
      { name: 'RAG', icon: SiPython, color: '#3776AB' },
      { name: 'Vector Search', icon: SiVectorlogozone, color: '#3776AB' },
      { name: 'AI Chatbot Development', icon: GiArtificialIntelligence, color: '#3776AB' },
      // { name: 'OpenAI', icon: SiOpenai, color: '#00A67E' },

    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Database & Data',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Pinecone', icon: SiPinescript, color: '#003B57' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FF6B00' },
      { name: 'Supabase', icon: SiVectorlogozone, color: '#003B57' },
    ],
  },


  // {
  //   title: 'DevOps & Infrastructure',
  //   skills: [
  //     { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  //     { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  //     { name: 'Nginx', icon: SiNginx, color: '#009639' },
  //     { name: 'Git', icon: SiGit, color: '#F05032' },
  //     { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  //   ],
  // },
];

const additionalSkills = [
  'Prompt Engineering',
  'Memory Handling in AI Agents',
  'Workflow-based AI Systems',
  'Semantic Search',
  'Context Management in LLMs',
  'Large Language Models (LLMs)',
];

const Skills = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tools and technologies I work with daily
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift"
              >
                <h3 className="text-lg font-bold mb-6 text-[rgb(var(--accent))] min-h-[56px] flex items-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group cursor-pointer min-h-[44px]"
                    >
                      <div
                        className="p-2 bg-[rgb(var(--background))] rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                        style={{
                          backgroundColor: `${skill.color}15`,
                        }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-[rgb(var(--accent))] transition-colors text-sm leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-6">Additional Tools & Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 card-gradient border border-[rgb(var(--border))] rounded-lg text-gray-300 hover:text-[rgb(var(--accent))] hover:border-[rgb(var(--accent))] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Task Management Tools */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Collaboration Tools</h3>
            <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Slack',
                  'Trello',
                  'Github',
                  'Git',
                  'Skype',
                  'Zoom',
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-lg border border-[rgb(var(--accent))]/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

