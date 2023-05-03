import SizeGuide from "./partials/size-guide";
import AddToCart from "./partials/add-to-cart";
import ProductDescription from "./partials/product-description";

export default function ProductInfo() {
  return (
    <div className="lg:w-2/5">
      <div className="border-b pb-6">
        <h2 className="mb-2 text-2xl">V-Neck Dress</h2>
        <h5 className="mb-5 text-sm text-secondary">Product code: 5DG1345</h5>
        <h4 className="text-xl font-medium text-primary">$99.30</h4>
      </div>
      <SizeGuide />
      <AddToCart />
      <ProductDescription />
    </div>
  );
}
