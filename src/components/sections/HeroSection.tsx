import { motion } from "motion/react";
import ParticlesComponent from "../ui/ParticleBackground";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
      <section id="hero" className="bg-primaryBlack relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center space-y-4 md:space-y-12">
              <ParticlesComponent></ParticlesComponent>
              <motion.p
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
              >
                  Hi, my name is
              </motion.p>
              <motion.h1
                  className="text-white text-6xl sm:text-8xl md:text-9xl lg:text-[18rem] font-black"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
              >
                  Zyttal
              </motion.h1>
              <motion.p
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
              >
                  a Full stack Developer in Cebu, Philippines
              </motion.p>
              <motion.div
                  className="text-white flex flex-col sm:flex-row items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
              >
                  <span className="text-gray-400">Specialized in</span>
                  <TypeAnimation
                      sequence={[
                          'Flutter',
                          1500,
                          'Django',
                          1500,
                          'React',
                          1500,
                          'Firebase',
                          1500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="text-primaryWhite font-bold"
                  />
              </motion.div>
          </div>
      </section>
  );
}