import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl select-none"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: "110vh",
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}