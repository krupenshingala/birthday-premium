import { Heart, Music2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-10 py-6">
      <div className="flex items-center gap-2 text-white">
        <Heart className="fill-pink-500 text-pink-500" size={24} />
        <span className="text-xl font-semibold">For Mansi</span>
      </div>

      <button className="rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-white/20">
        <Music2 size={22} />
      </button>
    </nav>
  );
}