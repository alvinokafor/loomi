import Layout from "@/components/layouts/layout";
import Container from "@/components/layouts/container";
import ProductShowcase from "@/components/products/product-showcase";
import ProductInfo from "@/components/products/product-info";

export default function Product() {
  return (
    <Layout>
      <section className="lg:mt-32">
        <Container>
          <div className="items-start gap-x-10 lg:flex">
            <ProductShowcase />
            <ProductInfo />
          </div>
        </Container>
      </section>
    </Layout>
  );
}
