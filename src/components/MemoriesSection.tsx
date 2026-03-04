import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  {
    before: "/images/before-holi.png",
    after: "/images/after-holi.png",
    captionBefore: "Before Holi 😎",
    captionAfter: "After Holi 🤡",
  },
  {
    before: "/images/before-holi.png",
    after: "/images/after-holi.png",
    captionBefore: "Looking fresh 🧼",
    captionAfter: "Looking... artistic 🎨",
  },
];

const MemoriesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display holi-text-gradient text-center mb-12"
        >
          📸 THE TRANSFORMATION 📸
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {photos.map((photo, i) => (
            <MemoryCard key={i} {...photo} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemoryCard = ({
  before, after, captionBefore, captionAfter, delay,
}: {
  before: string; after: string; captionBefore: string; captionAfter: string; delay: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring" }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((h) => !h)}
    >
      <div className="aspect-square relative">
        <img
          src={hovered ? after : before}
          alt={hovered ? captionAfter : captionBefore}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end">
          <motion.p
            key={hovered ? "after" : "before"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-6 text-2xl font-display"
            style={{ color: "hsl(0, 0%, 100%)" }}
          >
            {hovered ? captionAfter : captionBefore}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default MemoriesSection;
