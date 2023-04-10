export default function Container({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto lg:max-w-[1200px]">{children}</section>;
}
