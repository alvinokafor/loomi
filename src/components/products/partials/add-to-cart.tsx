import LikeIcon from "../icons/like-icon";

export default function AddToCart() {
  return (
    <div className="mt-6 flex items-center">
      <button className="basis-[90%] bg-primary py-4 text-sm font-semibold uppercase text-white">
        Add to bag
      </button>
      <button className="basis-[10%] px-3">
        <LikeIcon />
      </button>
    </div>
  );
}
