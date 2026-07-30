export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-400/40 blur-3xl"></div>

      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/40 blur-3xl"></div>
    </>
  );
}