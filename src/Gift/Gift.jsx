import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-50 to-pink-100 px-6">
      <div className="text-center">

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          className="mx-auto flex h-52 w-52 cursor-pointer items-center justify-center rounded-3xl bg-pink-500 shadow-2xl"
        >
          <Gift size={100} color="white" />
        </motion.div>

        <p className="mt-6 text-xl font-semibold text-pink-600">
          Click the Gift ❤️
        </p>

        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-pink-600">
                Happy Birthday Cutie ❤️
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                Wishing you endless happiness, beautiful memories,
                and a year filled with love, laughter, and success.
                You deserve all the happiness in the world.
              </p>

              <div className="mt-8 text-5xl">
                🎂🎉🎈❤️
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}