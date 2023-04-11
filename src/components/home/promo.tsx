import { Cormorant } from "next/font/google";
import Container from "../layouts/container";

const cormarant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500"],
  variable: "--font-cormarant",
});

export default function Promo() {
  return (
    <section className="mt-28">
      <Container>
        <section className="relative flex">
          <div className="flex w-3/5 flex-col items-center justify-center bg-almond">
            <h4 className={`${cormarant.className} z-20 text-4xl`}>
              Explore discounted products up to 40%
            </h4>
            <button className="mt-10 bg-white px-6 py-4 text-sm font-semibold shadow-sm">
              Shop now
            </button>
          </div>

          <div className="w-2/5">
            <img src="/images/promo-img.png" alt="" />
          </div>

          <div className="absolute">
            <img src="/images/wave.svg" alt="" />
          </div>
        </section>
      </Container>
    </section>
  );
}
