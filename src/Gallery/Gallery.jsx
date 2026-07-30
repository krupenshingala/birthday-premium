import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Gallery.css";
import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our Beautiful Memories ❤️
      </motion.h2>

      <motion.p
        className="gallery-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Every picture tells a story...
      </motion.p>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <img src={photo} alt={`Memory ${index + 1}`} />

            <div className="gallery-overlay">
              <Heart size={28} fill="white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}