import { Cormorant } from "next/font/google";
import Container from "../layouts/container";
import SectionTitle from "./section-title";

const cormarant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500"],
  variable: "--font-cormarant",
});

export default function NewArrival() {
  return (
    <section className="relative mt-28 bg-accent pt-12 text-center">
      <Container>
        <div className="mb-10 lg:hidden">
          <h1
            className={`${cormarant.className} mb-4 text-6xl font-light text-dun lg:text-8xl`}
          >
            NEW ARRIVAL
          </h1>
          <SectionTitle title="Fall 2023" color="text-light" />
        </div>

        <div>
          <div className="flex justify-center">
            <div className="rounded-t-full border border-light/10 px-8 pt-7">
              <div className="rounded-t-full border border-light/30 px-4 pt-3.5">
                <img src="/images/new-arrival.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <button className="my-10 bg-white px-6 py-4 text-sm font-semibold uppercase shadow-md lg:hidden">
          Explore
        </button>
      </Container>

      <div className="absolute left-0 right-0 top-[50%] hidden lg:block">
        <div>
          <h1
            className={`${cormarant.className} mb-4 text-6xl font-light text-dun lg:text-8xl`}
          >
            NEW ARRIVAL
          </h1>
          <SectionTitle title="Fall 2023" color="text-light" />
        </div>

        <button className="mt-28 bg-white px-6 py-4 text-sm font-semibold uppercase shadow-md">
          Explore
        </button>
      </div>

      <div className="absolute bottom-0 hidden lg:block">
        <img src="/images/gold-blob.svg" alt="" />
      </div>

      <div className="absolute right-0 top-0 hidden lg:block">
        <img src="/images/red-blob.svg" alt="" />
      </div>
    </section>
  );
}
