interface SectionLabelProps {
  index: string;
  title: string;
  id?: string;
}

const SectionLabel = ({ index, title, id }: SectionLabelProps) => {
  return (
    <h2 id={id} className="mb-6 flex items-center gap-4 text-2xl font-bold tracking-tight text-white">
      <span className="font-mono text-base font-normal text-accent">{index}.</span>
      <span>{title}</span>
      <span className="hidden h-px max-w-xs flex-1 bg-white/10 sm:block" aria-hidden />
    </h2>
  );
};

export default SectionLabel;
