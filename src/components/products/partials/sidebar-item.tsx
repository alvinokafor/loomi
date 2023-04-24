export default function SideBarItem({ item }: { item: string }) {
  return (
    <button className="flex w-full items-center space-x-2 px-4 py-1.5 hover:bg-primary hover:text-white">
      <p>{item}</p>
      <span className="h-1 w-1 rounded-full bg-slate-400"></span>
      <p>1721</p>
    </button>
  );
}
