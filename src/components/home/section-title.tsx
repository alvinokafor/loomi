export default function SectionTitle({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <h2 className={`text-lg uppercase leading-[150%] tracking-[6%] ${color}`}>
      {title}
    </h2>
  );
}

SectionTitle.defaultProps = {
  title: "Section Title",
  color: "text-black",
};
