import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import "./Videos.css";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

const videos = [
  {
    title: "Our Special Memory ❤️",
    video: video1,
  },
  {
    title: "Beautiful Moments ❤️",
    video: video2,
  },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="videos-section">
      <motion.h2
        className="videos-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Special Videos ❤️
      </motion.h2>

      <p className="videos-subtitle">
        Every moment deserves to be remembered.
      </p>

      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="video-card"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedVideo(video.video)}
          >
            {/* Video Thumbnail */}
            <div className="video-thumbnail">
              <video
                src={video.video}
                muted
                preload="metadata"
              />

              <div className="play-overlay">
                <Play size={60} fill="white" />
              </div>
            </div>

            <h3>{video.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}