import SideBarItem from "./partials/sidebar-item";

export default function SideBar() {
  const num: string[] = [
    "View all",
    "Blouses & Shirts",
    "Pants",
    "Jeans",
    "Outdoor wears",
    "Sweaters",
    "Shorts",
    "Socks, Tights",
  ];
  return (
    <section className="hidden lg:block">
      <h2 className="mb-6 hidden font-semibold uppercase text-brown">
        Categories
      </h2>

      <div className="space-y-2">
        {num.map((item) => (
          <SideBarItem key={item} item={item} />
        ))}
      </div>
    </section>
  );
}
