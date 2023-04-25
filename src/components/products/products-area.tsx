import { useState } from "react";
import ProductCard from "./partials/product-card";
import CategorySelection from "./partials/category-selection";
import SliderPopout from "./partials/slider-popout";
import { ChevronDown } from "../assets";

export default function ProductsArea() {
  const [showSliderPopout, setShowSliderPopout] = useState<boolean>(false);
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

        <div className="flex items-center gap-x-4 text-sm ">
          <p>Price Range: $0 - $150</p>
          <SliderPopout
            slideValues={slideValues}
            setSlideValues={setSlideValues}
          />
        </div>
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
