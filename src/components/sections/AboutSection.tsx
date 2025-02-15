import { motion } from "motion/react";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-primaryWhite relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-24">
          {/* Title Section */}
          <div className="lg:sticky lg:top-32 w-full lg:w-64">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primaryBlack">About</h2>
              
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 md:space-y-12 w-full lg:max-w-[71%]">
            <motion.p
              className="text-xl md:text-2xl lg:text-4xl font-normal text-primaryBlack/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My full Name is <span className="font-semibold">Zharlaw Calimpon</span>. I&apos;m a Full Stack Developer in Cebu. I&apos;m very passionate with everything that makes the internet work.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl lg:text-4xl font-normal text-primaryBlack/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              When it comes to Web Development, I have prior experience with <span className="font-semibold">React</span> and <span className="font-semibold">Django</span> which I have heavily dealt with during my College years.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl lg:text-4xl font-normal text-primaryBlack/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              For Mobile, <span className="font-semibold">Flutter</span> is my main Framework and I have made numerous Mobile apps with it, even made an application which was intended for school use.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}