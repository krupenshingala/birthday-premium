import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full border-2 border-pink-500"
    />
  );
}