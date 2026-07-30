import "./Hero.css";
import FloatingHearts from "./FloatingHearts";
import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import Sparkles from "./Sparkles";
import Navbar from "./Navbar";
import MouseGlow from "./MouseGlow";
import CustomCursor from "./CustomCursor";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden
bg-[length:300%_300%]
bg-gradient-to-br
from-pink-400
via-pink-200
to-violet-300
animate-[gradient_12s_ease_infinite]">
<CustomCursor />

<MouseGlow />

<Navbar />

  <Sparkles />

  <FloatingHearts />

  <BackgroundGlow />

  <HeroContent />

</section>
  );
}