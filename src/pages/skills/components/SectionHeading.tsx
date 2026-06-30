interface SectionHeadingProps {
  title: string;
  align?: 'center' | 'left';
}

const SectionHeading = ({ title, align = 'center' }: SectionHeadingProps) => {
  return (
    <div
      className={[
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
      ].join(' ')}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div
        className={[
          'mt-3 h-0.5 w-12 bg-accent',
          align === 'center' ? 'mx-auto' : '',
        ].join(' ')}
      />
    </div>
  );
}

export default SectionHeading;
