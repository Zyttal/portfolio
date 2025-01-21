import { motion } from "motion/react";

export const AboutSection = () => {
  return <section id="about" className="bg-primaryWhite relative h-screen flex items-center justify-center overflow-hidden">
    <div className="mx-auto px-24 w-full max-w-[1920px]">
      <div className="flex justify-between items-start gap-24">
        <div className="sticky top-32 w-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold text-primaryBlack">About</h2>
            <motion.div
              className="h-1 bg-primaryBlack mt-4 w-32"
              initial={{ width: 0 }}
              whileInView={{ width: 175 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.div>
        </div>

        <div className="space-y-12 max-w-[60%]">
          <motion.p
            className="text-4xl font-normal text-primaryBlack/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My full Name is <span className="font-semibold">Zharlaw Calimpon</span>. I'm a Full Stack Developer in Cebu. I'm very passionate with everything that makes the internet work.
          </motion.p>

          <motion.p
            className="text-4xl font-normal text-primaryBlack/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            When it comes to Web Development, I have prior experience with <span className="font-semibold">React</span> and <span className="font-semibold">Django</span> which I have heavily dealt with during my College years.
          </motion.p>

          <motion.p
            className="text-4xl font-normal text-primaryBlack/90 leading-relaxed"
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
  </section>;
}