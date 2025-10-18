'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi';

const About = () => {
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
    <section id="about" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Main description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-gradient rounded-2xl p-8 border border-[rgb(var(--border))] hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  Professional Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a seasoned backend developer with 3+ years of experience
                  architecting scalable server-side solutions. My core expertise
                  lies in Node.js ecosystems, having built robust applications
                  using Express.js, NestJS, and Fastify.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I excel at designing efficient database architectures using
                  Supabase, MongoDB and PostgreSQL, complemented by modern ORMs
                  like Prisma, TypeORM, and Sequelize. My DevOps experience
                  includes deployments, CI/CD pipeline optimization and cloud
                  configuration.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  While I specialize in backend development, I bring valuable
                  full-stack perspective with hands-on experience in React.js and
                  Svelte. I'm passionate about clean code architecture and system
                  optimization, consistently delivering high-performance solutions
                  that drive business success.
                </p>
              </div>
            </motion.div>

            {/* Right side - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--accent))]/10 rounded-lg">
                    <FiBookOpen className="w-6 h-6 text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-[rgb(var(--accent))] font-medium">
                      Bachelor of Computer Sciences
                    </p>
                    <p className="text-gray-400 text-sm">
                      Institute of Management Sciences Peshawar
                    </p>
                    <p className="text-gray-500 text-sm">2017 - 2021</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--accent))]/10 rounded-lg">
                    <FiGlobe className="w-6 h-6 text-[rgb(var(--accent))]" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xl font-semibold mb-4">Languages</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">English</span>
                          <span className="text-[rgb(var(--accent))]">Proficient</span>
                        </div>
                        <div className="h-2 bg-[rgb(var(--background))] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 w-[90%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">Urdu</span>
                          <span className="text-[rgb(var(--accent))]">Fluent</span>
                        </div>
                        <div className="h-2 bg-[rgb(var(--background))] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">Wakhi</span>
                          <span className="text-[rgb(var(--accent))]">Native</span>
                        </div>
                        <div className="h-2 bg-[rgb(var(--background))] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-emerald-400 w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="card-gradient rounded-2xl p-6 border border-[rgb(var(--border))] hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--accent))]/10 rounded-lg">
                    <FiAward className="w-6 h-6 text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Hobbies & Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Tech Innovations',
                        'Camping',
                        'Trail Tracking',
                        'Cricket',
                        'Badminton',
                        'Swimming',
                        'Paragliding',
                      ].map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full text-sm border border-[rgb(var(--accent))]/20"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

