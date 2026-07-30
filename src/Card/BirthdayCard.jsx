import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Card.css";

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  const handleContinue = () => {
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="card-section">
      {/* Background Glow */}
      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <div className="card-wrapper">
        {/* Greeting Card */}
        <div className="greeting-card">
          {/* Left Page */}
          <div className="card-left">
            <AnimatePresence>
              {open && (
                <motion.div
                  className="letter"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2>Dear Mansi ❤️</h2>

                  <p>
                    Happy Birthday! 🎉
                    <br />
                    <br />
                    Today is all about celebrating you. May God bless you with strength, peace, and countless reasons to smile.
                     Keep believing in yourself, keep chasing your dreams, and I'll always be by your side.❤️
                    <br />
                    I hope this little surprise makes you smile.
                  </p>

                  <button onClick={handleContinue}>
                    Continue Our Journey →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Front Cover */}
          <motion.div
            className="card-cover"
            animate={{
              rotateY: open ? -170 : 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => setOpen(true)}
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="heart"
            >
              ❤️
            </motion.div>

            <h1>Happy Birthday</h1>

            <h3>Mansi</h3>

            <span>Click to Open</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}