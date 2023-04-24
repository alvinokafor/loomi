import { useState } from "react";
import ProductCard from "./partials/product-card";
import CategorySelection from "./partials/category-selection";
import PriceSlider from "./partials/slider";

export default function ProductsArea() {
  const [slideValues, setSlideValues] = useState<number[]>([0, 150]);
  const selection: string[] = [
    "Blouses & Shirts",
    "Pants",
    "Jeans",
    "Outdoor wears",
    "Sweaters",
    "Shorts",
    "Socks, Tights",
  ];
  return (
    <section className="mt-20 flex-1 lg:mt-0">
      <div className="mb-6 flex items-center justify-between lg:hidden">
        <p className="text-lg font-semibold uppercase leading-[150%] tracking-[6%]">
          Jeans
        </p>

        <CategorySelection selection={selection} />
      </div>

      <div className="mb-6  flex justify-between">
        <p className="sm:block lg:text-2xl">1712 results</p>

        <button className="text-sm">
          <span>
            Price: ${slideValues[0]} - ${slideValues[1]}
          </span>
          <PriceSlider setSlideValues={setSlideValues} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
