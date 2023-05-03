import Layout from "@/components/layouts/layout";
import Container from "@/components/layouts/container";
import ProductCard from "@/components/products/partials/product-card";

export default function Product() {
  return (
    <Layout title="Cart">
      <section className="pt-24 lg:mt-32 lg:pt-0">
        <Container>
          <p className="text-lg mb-8 uppercase leading-[150%] tracking-wider">
            Liked Products
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-9 lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </section>
    </Layout>
  );
}
