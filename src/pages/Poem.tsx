import { Feather } from "lucide-react";

const poemLines = [
  "Before you, the world was a quiet room —",
  "familiar walls, a steady hum of days.",
  "Then you arrived, not with noise,",
  "but with a silence that rearranged everything.",
  "",
  "You are the pause between my heartbeats,",
  "the breath I didn't know I was holding.",
  "In your eyes I found constellations",
  "that no sky has ever shown me.",
  "",
  "I do not love you as if you were a dream —",
  "I love you as something certain,",
  "as the ground beneath my feet,",
  "as the first warmth of morning light.",
  "",
  "You are my quiet revolution,",
  "my slow, beautiful unraveling.",
  "And if I were given a thousand lifetimes,",
  "I would find you in every single one.",
];

const Poem = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-rose opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="opacity-0 animate-fade-up space-y-4">
          <Feather className="w-6 h-6 text-rose-accent mx-auto float-animation" />
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-foreground">
            A Poem for You
          </h1>
        </div>

        {/* Poem */}
        <div className="opacity-0 animate-fade-up-delay-1 glass-card glow-rose p-8 sm:p-12">
          <div className="space-y-1">
            {poemLines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-6" />
              ) : (
                <p
                  key={i}
                  className="font-display text-lg sm:text-xl italic text-foreground/80 leading-relaxed font-light"
                >
                  {line}
                </p>
              )
            )}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Written with love, for you alone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poem;
