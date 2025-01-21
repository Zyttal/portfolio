import { motion } from "motion/react";
import ParticlesComponent from "../ui/ParticleBackground";

export const HeroSection = () => {
    return <section id="hero" className="bg-primaryBlack relative min-h-screen w-screen flex items-center justify-center">
        <div className="text-center space-y-2">
            <ParticlesComponent></ParticlesComponent>
            <motion.p
                className="text-white text-4xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Hi, my name is
            </motion.p>
            <motion.h1
                className="text-white lg:text-[24rem] font-black"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Zyttal
            </motion.h1>
            <motion.p
                className="text-white text-4xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                a Full stack Developer in Cebu, Philippines
            </motion.p>
        </div>
    </section>;
}