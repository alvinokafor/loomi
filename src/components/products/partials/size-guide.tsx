export default function SizeGuide() {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <div className="mt-6 border-b pb-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-secondary">
          Size: <span className="font-medium text-black">XS</span>
        </p>
        <p className="text-sm text-brown">Size guide</p>
      </div>
      <div className="mt-5 space-x-4">
        {sizes.map((size) => (
          <button className="min-h-[40px] min-w-[40px] rounded-full border border-accent2 text-center  text-sm text-primary transition-all duration-150 hover:bg-accent2 hover:text-white">
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
