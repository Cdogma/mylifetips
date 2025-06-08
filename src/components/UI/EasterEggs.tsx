
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEggs = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showSecret, setShowSecret] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonamiCode(prev => {
        const newCode = [...prev, e.code].slice(-10);
        if (newCode.join(",") === konami.join(",")) {
          setShowSecret(true);
          setTimeout(() => setShowSecret(false), 5000);
          return [];
        }
        return newCode;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 9) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setClickCount(0);
    }
  };

  return (
    <>
      {/* Secret Konami Code Message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
              boxShadow: "0 25px 50px rgba(255, 105, 180, 0.5)"
            }}
          >
            <div className="text-white text-center">
              <div className="text-2xl mb-2">🎉 Konami Code Activated! 🎉</div>
              <div className="text-sm opacity-90">You found the secret!</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-40">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded"
                style={{
                  background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  left: `${Math.random() * 100}%`,
                  top: "-10px"
                }}
                initial={{ y: -10, opacity: 1, rotate: 0 }}
                animate={{ 
                  y: window.innerHeight + 10, 
                  opacity: 0, 
                  rotate: 360,
                  x: Math.random() * 200 - 100
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Hidden Click Target */}
      <div
        onClick={handleLogoClick}
        className="fixed bottom-4 right-4 w-8 h-8 cursor-pointer opacity-0 hover:opacity-20 transition-opacity"
        style={{ background: "transparent" }}
        title={`Clicks: ${clickCount}/10`}
      />
    </>
  );
};

export default EasterEggs;
