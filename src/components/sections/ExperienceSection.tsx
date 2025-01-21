import { experiences } from '@/data/experiences';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ExperienceSection = () => {
  const [selectedId, setSelectedId] = useState(experiences[0].id);

  return (
    <section id='experience' className="bg-primaryBlack relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative w-full max-w-[1920px] px-24 pt-32">
        <div className="grid grid-cols-[400px_1fr]"> {/* Removed gap */}
          {/* Left Column */}
          <div className="w-full">
            <h2 className="text-6xl font-bold text-white mb-20">Experience</h2> {/* Changed text color to white */}

            <div className="flex flex-col w-full">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`flex items-center cursor-pointer group text-3xl py-12 px-8 w-full
                  border-l-4 transition-all duration-300 ease-in-out
                  ${selectedId === exp.id
                      ? 'border-white border-opacity-100 border-b-4'
                      : 'border-white border-opacity-20' 
                    }`}
                  onClick={() => setSelectedId(exp.id)}
                >
                  <span className={`transition-all duration-300 ease-in-out
                  ${selectedId === exp.id
                      ? 'text-white font-medium drop-shadow-lg translate-x-2' 
                      : 'text-white/40 drop-shadow-none translate-x-0' 
                    }`}
                  >
                    {exp.company}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full pl-24">
            <div className="relative h-[500px]">
              {experiences.map((exp) => (
                exp.id === selectedId && (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full"
                  >
                    <h3 className="text-6xl font-bold text-white mb-4">{exp.title}</h3>
                    <h4 className="text-4xl text-white mb-2">{exp.company}</h4> 
                    <p className="text-2xl italic text-white/60 mb-8">{exp.duration}</p> 
                    <div className="space-y-6">
                      {exp.description.map((point, index) => (
                        <div key={index} className="flex gap-4 lg:text-4xl leading-relaxed">
                          <p className="text-white">{point}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
