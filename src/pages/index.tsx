import Layout from "@/components/layouts/layout";
import Hero from "@/components/home/hero";
import TrendingSection from "@/components/home/trending-section";
import TrustedBrands from "@/components/home/trusted-brands";
import NewArrival from "@/components/home/new-arrival";
import Promo from "@/components/home/promo";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrendingSection />
      <TrustedBrands />
      <NewArrival />
      <Promo />
    </Layout>
  );
}
