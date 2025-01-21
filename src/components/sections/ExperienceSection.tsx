import { experiences } from '@/data/experiences';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ExperienceSection = () => {
  const [selectedId, setSelectedId] = useState(experiences[0].id);

  return (
    <section id='experience' className="bg-primaryBlack relative min-h-screen flex items-center justify-center">
      {/* Main content */}
      <div className="container mx-auto px-8 lg:px-8 max-w-[1600px] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-12">Experience</h2>

            <div className="flex flex-row lg:flex-col w-full overflow-x-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center cursor-pointer group text-xl lg:text-2xl py-8 px-6
        whitespace-nowrap flex-shrink-0 lg:flex-shrink
        lg:border-l-4 border-b-4 lg:border-b-0 transition-all duration-300 ease-in-out
        ${selectedId === exp.id
                      ? 'border-white border-opacity-100'
                      : 'border-white border-opacity-20 hover:border-opacity-50'
                    }`}
                  onClick={() => setSelectedId(exp.id)}
                >
                  <span className={`transition-all duration-300 ease-in-out
        ${selectedId === exp.id
                      ? 'text-white font-medium lg:translate-x-2'
                      : 'text-white/40 group-hover:text-white/60 lg:translate-x-0'
                    }`}
                  >
                    {exp.company}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative min-h-[400px]">
              {experiences.map((exp) => (
                exp.id === selectedId && (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">{exp.title}</h3>
                    <h4 className="text-2xl lg:text-3xl text-white mb-2">{exp.company}</h4>
                    <p className="text-xl lg:text-2xl italic text-white/60 mb-8">{exp.duration}</p>
                    <div className="space-y-6">
                      {exp.description.map((point, index) => (
                        <div key={index} className="flex gap-4 text-lg lg:text-xl xl:text-2xl leading-relaxed">
                          <p className="text-white">{point}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
