import SectionTitle from "./section-title";
import Container from "../layouts/container";

export default function TrustedBrands() {
  return (
    <section className="mt-16 text-center">
      <SectionTitle title="Only Trusted Brands" />

      <div className="scrollbar-hide mt-10 flex items-center gap-x-10 overflow-x-auto pl-5 lg:justify-center lg:gap-x-36 lg:pl-0 ">
        <img src="/images/image 15.png" alt="brand image" />
        <img src="/images/image 16.png" alt="brand image" />
        <img src="/images/image 17.png" alt="brand image" />
        <img src="/images/image 18.png" alt="brand image" />
        <img src="/images/image 19.png" alt="brand image" />
        <img src="/images/image 20.png" alt="brand image" />
      </div>
    </section>
  );
}
