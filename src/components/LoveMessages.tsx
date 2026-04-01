import { useState } from "react";
import { Heart } from "lucide-react";

const messages = [
  "You are my today and all of my tomorrows.",
  "Every love story is beautiful, but ours is my favorite.",
  "In you, I've found the love of my life and my closest friend.",
  "You make the ordinary feel extraordinary.",
  "My heart recognized you before my eyes ever did.",
  "With you, every moment is a moment worth living.",
  "You are the poem I never knew how to write.",
];

const LoveMessages = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const nextMessage = () => {
    setFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFading(false);
    }, 300);
  };

  return (
    <div className="text-center">
      <button
        onClick={nextMessage}
        className="glass-card glow-rose-hover px-8 py-6 cursor-pointer transition-all duration-500 group max-w-lg mx-auto block"
      >
        <p
          className={`font-display text-lg sm:text-xl italic text-foreground transition-opacity duration-300 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          "{messages[index]}"
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground group-hover:text-rose-accent transition-colors duration-300">
          <Heart className="w-3 h-3" />
          <span className="font-body text-xs tracking-widest uppercase">
            Click for another
          </span>
          <Heart className="w-3 h-3" />
        </div>
      </button>
    </div>
  );
};

export default LoveMessages;
