import { Heart } from "lucide-react";
import Countdown from "@/components/Countdown";
import LoveMessages from "@/components/LoveMessages";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-rose opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="opacity-0 animate-fade-up space-y-4">
          <Heart className="w-8 h-8 text-rose-accent mx-auto float-animation" />
          <h1 className="font-display text-5xl sm:text-7xl font-light tracking-wide text-foreground">
            For You <span className="text-rose-accent">❤️</span>
          </h1>
        </div>

        {/* Message */}
        <p className="opacity-0 animate-fade-up-delay-1 font-body text-lg sm:text-xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto">
          Every moment with you feels like a lifetime of happiness condensed
          into a single heartbeat. You are the reason my world has color.
        </p>

        {/* Countdown */}
        <div className="opacity-0 animate-fade-up-delay-2 space-y-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Time since we found each other
          </p>
          <Countdown />
        </div>

        {/* Love messages */}
        <div className="opacity-0 animate-fade-up-delay-3 pt-4">
          <LoveMessages />
        </div>
      </div>
    </div>
  );
};

export default Index;
