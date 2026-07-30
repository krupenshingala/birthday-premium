import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-[90%] max-w-3xl rounded-[40px]
        border border-white/40
        bg-white/8
        p-14
        text-center
        shadow-[0_25px_80px_rgba(0,0,0,0.15)]
        backdrop-blur-[40px]
        border border-white/20"
    >
      <h3 className="mb-4 text-3xl font-semibold text-pink-600">
        🎂 Happy Birthday
      </h3>

      <h1 className="mb-6 text-8xl font-bold text-white">
        <h1 className="mb-6 text-8xl font-bold tracking-tight text-white">
  Mansi{" "}
  <span className="inline-block animate-pulse">❤️</span>
</h1>
      </h1>

      <p className="mx-auto mb-8 max-w-xl text-xl leading-9 text-white">
        Many Many Happy Returns Of The Day To My Fav Person.
      </p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full
        bg-white
        px-10
        py-4
        text-lg
        font-semibold
        text-pink-600
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-pink-300/50"
      >
        <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    document
      .getElementById("story")
      ?.scrollIntoView({ behavior: "smooth" })
  }
 className="group rounded-full bg-white px-10 py-4 text-lg font-semibold text-pink-600 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,105,180,0.5)] active:scale-95"
>
  Begin Journey
</motion.button>
      </motion.button>
    </motion.div>
  );
}