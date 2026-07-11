import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/HMS_pic1.png",
  "/HMS_pic2.png",
  "/HMS_pic3.png",
  "/HMS_pic4.png",
  "/HMS_pic5.png",
];

const ProjectSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex-1">
      <div className="relative overflow-hidden rounded-xl border border-[--color-border]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`HMS Screenshot ${current + 1}`}
            className="w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <motion.span
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === current ? "bg-[--color-accent]" : "bg-[--color-accent]/40"
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
