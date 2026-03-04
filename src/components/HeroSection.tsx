import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fireColorExplosion } from "./ColorSplash";

const HeroSection = () => {
  const [exploded, setExploded] = useState(false);

  const handleDare = () => {
    setExploded(true);
    fireColorExplosion();
    setTimeout(() => fireColorExplosion(), 800);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-holi-pink/20 blur-3xl"
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 50, 0], scale: [1, 1.3, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-10%", left: "-10%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-holi-yellow/20 blur-3xl"
          animate={{ x: [0, -80, 60, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", right: "-5%" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-holi-blue/20 blur-3xl"
          animate={{ x: [0, 60, -80, 0], y: [0, -50, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", left: "20%" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-holi-green/20 blur-3xl"
          animate={{ x: [0, -60, 40, 0], y: [0, 40, -60, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", right: "15%" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="text-6xl md:text-8xl mb-4"
        >
          🎨🔥
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-tight holi-text-gradient mb-6"
        >
          HAPPY HOLI YOU CRAZY PEOPLE
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl font-body font-bold text-foreground/80 mb-10"
        >
          Get ready to be attacked with colors 😈
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 300 }}
        >
          <button
            onClick={handleDare}
            className="holi-btn text-xl md:text-2xl px-10 py-5 animate-wiggle"
          >
            {exploded ? "BOOM! 💥🎨" : "Click If You Dare 😈"}
          </button>
        </motion.div>

        <AnimatePresence>
          {exploded && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-lg md:text-xl font-body font-bold text-holi-pink"
            >
              You've been HOLI'D! 🎉 Now scroll down for more madness ⬇️
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
