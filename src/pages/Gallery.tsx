import { Film, Heart } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen px-6 py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-rose opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center opacity-0 animate-fade-up space-y-4">
          <Film className="w-6 h-6 text-rose-accent mx-auto" />
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-wide text-foreground">
            Moments with <span className="text-gradient-rose italic">Izeel</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg font-light">
            A glimpse of the beauty I get to witness every day
          </p>
        </div>

        {/* Video */}
        <div className="opacity-0 animate-fade-up-delay-1">
          <div className="glass-card glow-rose p-3 sm:p-4 rounded-2xl">
            <video
              src="/videos/izeel.mp4"
              controls
              className="w-full rounded-xl"
              playsInline
              preload="metadata"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-rose-accent" />
            <p className="font-body text-sm text-muted-foreground font-light italic">
              My favorite person
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
