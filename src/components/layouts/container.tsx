export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[350px] sm:max-w-screen-sm lg:max-w-[1200px]">
      {children}
    </section>
  );
}
