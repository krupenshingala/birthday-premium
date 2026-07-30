import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-5xl font-bold text-pink-600 mb-8">
           Story ❤️
        </h2>

        <p className="text-xl leading-9 text-gray-700">
          Every journey begins with a single memory.
          <br />
          This page is a collection of moments, laughter, and memories that
          make your birthday even more special.
        </p>
      </motion.div>
    </section>
  );
}