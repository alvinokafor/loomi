import Layout from "@/components/layouts/layout";
import Container from "@/components/layouts/container";
import CartCard from "@/components/cart/cart-card";
import SubTotals from "@/components/cart/partials/sub-totals";
import PaymentCard from "@/components/cart/payment-card";
import SectionTitle from "@/components/home/section-title";

export default function Product() {
  return (
    <Layout title="Cart">
      <section className="pt-24 lg:mt-32 lg:pt-0">
        <Container>
          <div className="flex flex-col items-start gap-x-28 lg:flex-row">
            <div className="w-full space-y-6 lg:basis-3/5">
              <p className="text-lg uppercase leading-[150%] tracking-wider">
                My Cart
              </p>
              <CartCard />
              <CartCard />
              <SubTotals />
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="mb-6 text-lg uppercase leading-[150%] tracking-wider lg:hidden">
                Payment
              </p>
              <PaymentCard />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
