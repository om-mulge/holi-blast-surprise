import { useCallback } from "react";
import confetti from "canvas-confetti";

const HOLI_HEX = ["#e6195c", "#f5a623", "#00bfff", "#2ecc71", "#ff6b35", "#9b59b6", "#ff1744"];

export const fireColorExplosion = () => {
  const duration = 2000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.6 },
      colors: HOLI_HEX,
      startVelocity: 50,
      gravity: 0.8,
      ticks: 200,
      shapes: ["circle"],
      scalar: 1.5,
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.6 },
      colors: HOLI_HEX,
      startVelocity: 50,
      gravity: 0.8,
      ticks: 200,
      shapes: ["circle"],
      scalar: 1.5,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

export const fireRandomSplash = () => {
  const x = 0.2 + Math.random() * 0.6;
  const y = 0.2 + Math.random() * 0.6;
  confetti({
    particleCount: 80,
    spread: 360,
    origin: { x, y },
    colors: HOLI_HEX,
    startVelocity: 30,
    gravity: 0.6,
    ticks: 150,
    shapes: ["circle"],
    scalar: 2,
  });
};

export const fireHeartExplosion = () => {
  confetti({
    particleCount: 100,
    spread: 360,
    origin: { x: 0.5, y: 0.5 },
    colors: ["#e6195c", "#ff1744", "#ff6b9d", "#ff4081"],
    shapes: ["circle"],
    scalar: 2,
    startVelocity: 25,
    ticks: 200,
  });
};

export const useScrollConfetti = () => {
  return useCallback(() => {
    confetti({
      particleCount: 30,
      spread: 100,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors: HOLI_HEX,
      ticks: 100,
      shapes: ["circle"],
      scalar: 1.2,
    });
  }, []);
};
