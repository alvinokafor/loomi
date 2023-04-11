const tabs_title: string[] = [
  "All",
  "Dresses",
  "Skirts",
  "Shoes",
  "Accessories",
];

export default function TrendingTabs() {
  return (
    <div className="scrollbar-hide mt-5 flex justify-center space-x-3 overflow-x-auto pl-20 sm:pl-0">
      {tabs_title.map((tab) => (
        <button
          className="rounded-full border border-secondary px-4 py-1.5 text-xs transition-all duration-150 hover:border-primary hover:bg-primary hover:text-white lg:text-base"
          key={tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
