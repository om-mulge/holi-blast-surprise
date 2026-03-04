import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "You can run but you can't hide from colors 😜",
  "Today I forgive you… after coloring you completely 😂",
  "Your face is about to become modern art 🎭",
  "Warning: Pink attack incoming 🚨",
  "Roses are red, Holi is fun, try running away, you can't outrun ANYONE 🏃‍♂️",
  "My pichkari has your name on it 🔫🎨",
  "Friendship rule: Colors first, sorry later 💛",
  "New shade unlocked: YOU 🎨",
];

const FunnyMessages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const colors = [
    "bg-holi-pink/10 border-holi-pink",
    "bg-holi-yellow/10 border-holi-yellow",
    "bg-holi-blue/10 border-holi-blue",
    "bg-holi-green/10 border-holi-green",
    "bg-holi-orange/10 border-holi-orange",
    "bg-holi-purple/10 border-holi-purple",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display holi-text-gradient mb-12"
        >
          😂 HOLI TRUTHS 😂
        </motion.h2>

        <div className="min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -40, rotate: 5 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border-4 px-8 py-6 ${colors[index % colors.length]}`}
            >
              <p className="text-xl md:text-2xl font-body font-bold text-foreground">
                {MESSAGES[index]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FunnyMessages;
