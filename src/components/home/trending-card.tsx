import { useState } from "react";
import { Like } from "../assets";
import AddIcon from "../general-icons/add-icon";
import RemoveIcon from "../general-icons/remove-icon";

export default function TrendingCard() {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div>
      <div className="relative h-[236px] sm:h-[242px]">
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4"
        >
          <Like liked={liked} />
        </button>
        <img
          className="h-full w-full object-cover"
          src="/images/product-img.png"
          alt="product image"
        />
      </div>

      <div className="mt-4 space-y-2 text-left sm:text-center">
        <p className="font-medium">Product Title</p>
        <p className="hidden text-sm lg:block">Category</p>
        <p className="text-sm text-primary">$Price</p>
      </div>

      <div className="mt-4">
        <button className="w-full bg-primary py-2 text-sm font-semibold text-white">
          Add to Cart
        </button>

        {/* <div className="flex items-center justify-center gap-x-2">
          <button>
            <RemoveIcon />
          </button>
          <span>1</span>
          <button>
            <AddIcon />
          </button>
        </div> */}
      </div>
    </div>
  );
}
