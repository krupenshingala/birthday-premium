import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-pink-300 to-purple-300"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-5xl font-bold text-white"
      >
        ❤️ Happy Birthday
      </motion.h1>

      <p className="mt-6 text-xl text-white/90">
        Preparing your surprise...
      </p>
    </motion.div>
  );
}