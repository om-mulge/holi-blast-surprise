import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fireRandomSplash } from "./ColorSplash";

const SURPRISE_MESSAGES = [
  "You look better in pink... trust me 😜",
  "This color is permanent... just kidding! 🤣",
  "Your white shirt says goodbye! 👋",
  "Duck! Incoming balloon! 🎈💦",
  "Too slow! You're already colored! 😂",
  "Your mom is going to kill me for this 🙈",
  "Plot twist: the color was in your food too 🍛🎨",
  "You thought this was safe? WRONG! 💣",
];

const InteractiveSection = () => {
  const [surprise, setSurprise] = useState<string | null>(null);

  const throwColor = () => {
    fireRandomSplash();
    fireRandomSplash();
  };

  const showSurprise = () => {
    const msg = SURPRISE_MESSAGES[Math.floor(Math.random() * SURPRISE_MESSAGES.length)];
    setSurprise(msg);
    setTimeout(() => setSurprise(null), 3000);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display holi-text-gradient mb-12"
        >
          🎯 YOUR TURN TO PLAY 🎯
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 10 }}
            onClick={throwColor}
            className="holi-btn text-lg"
          >
            🎨 Throw Color!
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={showSurprise}
            className="holi-btn holi-btn-blue text-lg"
          >
            💣 Surprise Attack!
          </motion.button>
        </div>

        <AnimatePresence>
          {surprise && (
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              className="inline-block bg-card rounded-2xl px-8 py-6 shadow-2xl border-4 border-holi-pink"
            >
              <p className="text-xl md:text-2xl font-display text-foreground">
                {surprise}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveSection;
