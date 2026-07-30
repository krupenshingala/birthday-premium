import FloatingHearts from "./FloatingHearts";
import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import Sparkles from "./Sparkles";
import Navbar from "./Navbar";
import MouseGlow from "./MouseGlow";
import CustomCursor from "./CustomCursor";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-pink-400
      via-pink-200
      to-violet-300

      bg-[length:300%_300%]
      animate-[gradient_15s_ease_infinite]
      px-6
      "
    >
      <CustomCursor />

      <MouseGlow />

      <BackgroundGlow />

      <Sparkles />

      <FloatingHearts />

      <Navbar />

      <HeroContent />
    </section>
  );
}