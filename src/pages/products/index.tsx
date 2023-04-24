import Layout from "@/components/layouts/layout";
import Container from "@/components/layouts/container";
import Sidebar from "@/components/products/sidebar";
import ProductsArea from "@/components/products/products-area";

export default function Products() {
  return (
    <Layout title="Discover Products">
      <section className="lg:mt-32">
        <Container>
          <div className="flex gap-x-20">
            <Sidebar />
            <ProductsArea />
          </div>
        </Container>
      </section>
    </Layout>
  );
}
