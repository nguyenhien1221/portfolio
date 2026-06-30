interface TechTagProps {
  label: string;
}

const TechTag = ({ label }: TechTagProps) => {
  return (
    <span className="rounded border border-accent/30 bg-accent/5 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-accent">
      {label}
    </span>
  );
}

export default TechTag;
