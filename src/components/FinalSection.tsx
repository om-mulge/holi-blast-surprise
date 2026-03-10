import { motion } from "framer-motion";
import { fireHeartExplosion } from "./ColorSplash";

const FinalSection = () => {
  const handleShare = () => {
    fireHeartExplosion();
    if (navigator.share) {
      navigator.share({
        title: "Happy Holi! 🎨🔥",
        text: "You've been Holi'd! Open this surprise 😈",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="text-6xl md:text-8xl mb-6">❤️</div>
          <h2 className="text-2xl md:text-4xl font-display holi-text-gradient mb-6">
            No matter how busy life gets...
          </h2>
          <p className="text-xl md:text-2xl font-body font-bold text-foreground/80 mb-4">
            Holi is incomplete without you ❤️
          </p>
          <p className="text-lg font-body text-muted-foreground mb-10">
            Thanks for being the color in my life 🎨</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="holi-btn holi-btn-green text-xl px-10 py-5"
          >
            Send This to Another Victim 😈
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-16 text-center text-muted-foreground font-body text-sm">
        Made with 🎨 and too much gulaal by OM MULGE
      </div>
    </section>
  );
};

export default FinalSection;
