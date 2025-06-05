import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Sample array of video objects containing metadata
const videos = [
  {
    id: 1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    creator: "@alexdev",
    title: "Cool Beach Vibes",
    description: "A short video of waves hitting the shore.",
    thumbnail: "https://placehold.co/300x200/png"
  },
  {
    id: 2,
    url: "https://www.w3schools.com/html/movie.mp4",
    creator: "@devgirl",
    title: "Coding Session",
    description: "Time-lapse of a night coding marathon.",
    thumbnail: "https://placehold.co/300x200/png"
  }
];

export default function ReelScroll() {
  // State to track the currently selected video for the modal
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    // Full screen scroll container with snap scrolling enabled
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {/* Loop through each video and render a full-screen video reel */}
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative h-screen w-full snap-start bg-black text-white"
        >
          {/* Full-screen video player */}
          <video
            src={video.url}
            controls
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />

          {/* Creator name overlay at the top left */}
          <div className="absolute top-4 left-4 text-lg font-bold">
            {video.creator}
          </div>

          {/* Button group on bottom right of video */}
          <div className="absolute bottom-20 right-4 flex flex-col gap-4">
            <button variant="ghost">❤️ 120</button>
            <button variant="ghost">💬 15</button>
            <button variant="ghost">🔗</button>

            {/* Open modal with more video info */}
            <button variant="outline" onClick={() => setActiveVideo(video)}>
              More Info
            </button>
          </div>
        </div>
      ))}

      {/* Modal for showing additional video information using animation */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ y: "100%" }} // Modal enters from bottom
            animate={{ y: 0 }}       // Animate into view
            exit={{ y: "100%" }}     // Animate out of view
            transition={{ duration: 0.3 }} // Smooth transition
            className="fixed bottom-0 left-0 w-full bg-white text-black p-6 rounded-t-2xl shadow-lg"
          >
            {/* Modal header with title and close button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{activeVideo.title}</h2>
              <button onClick={() => setActiveVideo(null)}>Close</button>
            </div>

            {/* Thumbnail and description */}
            <img
              src={activeVideo.thumbnail}
              alt="Thumbnail"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p>{activeVideo.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
