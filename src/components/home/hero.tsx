import { Cormorant } from "next/font/google";

const cormarant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500"],
  variable: "--font-cormarant",
});

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-20 bg-[url('/images/hero-img.jpg')] bg-cover bg-bottom">
      <div
        className={`${cormarant.className} mt-20 text-center text-6xl text-white lg:text-8xl`}
      >
        <p className="font-light">Comfort.</p>
        <p className="font-semibold italic">Aesthetic.</p>
        <p className="font-light">Unique.</p>
      </div>

      <button className="bg-white px-16 py-3 font-semibold shadow-md">
        Shop now
      </button>
    </section>
  );
}
