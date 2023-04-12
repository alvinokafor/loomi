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
        <section className="relative flex flex-col-reverse bg-almond lg:flex-row">
          <div className="flex flex-col items-center justify-center bg-almond text-center lg:w-3/5">
            <h4
              className={`${cormarant.className} z-20 mt-5 text-2xl lg:mt-0 lg:text-4xl`}
            >
              Explore discounted products up to 40%
            </h4>
            <button className="mb-10 mt-5 bg-white px-6 py-4 text-sm font-semibold shadow-sm lg:mb-0 lg:mt-10">
              Shop now
            </button>
          </div>

          <div className="px-10 mx-auto pt-10 lg:w-2/5 lg:px-0 lg:pt-0">
            <img src="/images/promo-img.png" alt="" />
          </div>

          <div className="absolute -left-24 top-0 lg:left-6 lg:top-6">
            <img src="/images/wave.svg" alt="" />
          </div>
        </section>
      </Container>
    </section>
  );
}
