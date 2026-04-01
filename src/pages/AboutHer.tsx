import { Heart, Sparkles, Star } from "lucide-react";

const reasons = [
  "The way your eyes light up when you laugh",
  "Your kindness that touches everyone around you",
  "How you make the smallest moments feel magical",
  "Your strength and grace in everything you do",
  "The sound of your voice — my favorite melody",
  "Your patience, your warmth, your beautiful soul",
  "How you love without condition, without hesitation",
  "The way you make me want to be a better person",
];

const AboutHer = () => {
  return (
    <div className="min-h-screen px-6 py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-rose opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-rose opacity-[0.02] blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center opacity-0 animate-fade-up space-y-4">
          <Sparkles className="w-6 h-6 text-rose-accent mx-auto" />
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-wide text-foreground">
            About <span className="text-gradient-rose italic">Izeel</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg font-light">
            The one who changed everything
          </p>
        </div>

        {/* Description card */}
        <div className="opacity-0 animate-fade-up-delay-1 glass-card glow-rose p-8 sm:p-12 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-light text-foreground">
            Izeel is <span className="text-gradient-rose italic">extraordinary</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed font-light">
            <p>
              There are people who walk into your life and quietly rearrange
              everything. She didn't arrive with thunder — she came like the
              first light of dawn, gentle and undeniable. And suddenly, nothing
              was the same.
            </p>
            <p>
              Her beauty isn't just something you see — it's something you feel.
              It's in the way she moves through the world with quiet confidence,
              in the softness of her voice, in the depth of her gaze. She
              carries a universe inside her, and I'm endlessly grateful to
              witness even a fraction of it.
            </p>
            <p>
              She makes me feel like I'm home, no matter where we are. With her,
              silence speaks, distance shrinks, and love becomes the simplest,
              most natural thing in the world.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="opacity-0 animate-fade-up-delay-2 space-y-8">
          <div className="text-center space-y-2">
            <Heart className="w-5 h-5 text-rose-accent mx-auto" />
            <h2 className="font-display text-2xl sm:text-3xl font-light text-foreground">
              Why I Love Her
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="glass-card glow-rose-hover p-5 flex items-start gap-3 transition-all duration-500 hover:-translate-y-1"
              >
                <Star className="w-4 h-4 text-rose-accent mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHer;
