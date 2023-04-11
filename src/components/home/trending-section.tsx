import Container from "../layouts/container";
import SectionTitle from "./section-title";
import TrendingCard from "./trending-card";
import TrendingTabs from "./trending-tabs";

export default function TrendingSection() {
  return (
    <Container>
      <section className="mt-28 text-center">
        <SectionTitle title="Trending now" />
        <TrendingTabs />

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-0 lg:grid-cols-4">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </section>
    </Container>
  );
}
