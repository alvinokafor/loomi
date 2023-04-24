import { useState } from "react";
import { Like } from "@/components/assets";

export default function ProductCard() {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div>
      <div className="relative h-[236px] overflow-hidden sm:h-[416px]">
        <div className="absolute top-4 z-20">
          <span className=" bg-urgent px-1.5 py-0.5 text-xs text-white">
            -12%
          </span>
          <span className=" bg-white px-1.5 py-0.5 text-xs text-urgent">
            New
          </span>
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 z-20"
        >
          <Like liked={liked} />
        </button>
        <img
          className="h-full w-full overflow-hidden object-cover transition-all duration-200 hover:scale-125"
          src="/images/product-img-2.png"
          alt="product image"
        />
      </div>

      <div className="mt-4 space-y-2 text-left sm:text-center">
        <p className="font-medium">Product Title</p>
        <p className="text-sm font-semibold text-primary">$Price</p>
      </div>
    </div>
  );
}
