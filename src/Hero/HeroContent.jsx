import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="
      relative
      z-20

      w-[92%]
      max-w-5xl

      rounded-[42px]

      border
      border-white/30

      bg-white/12

      backdrop-blur-[35px]

      px-10
      py-16

      md:px-20
      md:py-20

      text-center

      shadow-[0_30px_90px_rgba(255,105,180,0.18)]
      "
    >
      {/* Heading */}

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-pink-700 font-bold text-3xl md:text-5xl"
      >
        🎂 Happy Birthday
      </motion.h3>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
        mt-6

        text-white

        font-black

        text-6xl
        md:text-8xl
        lg:text-9xl

        tracking-tight
        leading-none
        "
      >
        Mansi{" "}
        <motion.span
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="inline-block"
        >
          ❤️
        </motion.span>
      </motion.h1>

      {/* Message */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
        mx-auto

        mt-8

        max-w-3xl

        text-white

        text-lg
        md:text-2xl

        leading-9
      "
      >
        Many Many Happy Returns Of The Day My Fav Person. ❤️
      </motion.p>

      {/* Button */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-14"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() =>
            document
              .getElementById("story")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="
          rounded-full

          bg-white

          px-12
          py-5

          text-lg
          md:text-xl

          font-bold

          text-pink-600

          shadow-[0_15px_45px_rgba(255,105,180,0.25)]

          transition-all

          hover:shadow-[0_0_50px_rgba(255,105,180,0.45)]
          "
        >
          Begin Journey ✨
        </motion.button>
      </motion.div>
    </motion.div>
  );
}