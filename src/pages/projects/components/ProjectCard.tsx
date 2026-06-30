import type { ReactElement } from 'react';
import ProjectPreview from './ProjectPreview';
import TechTag from './TechTag';

type PreviewVariant = 'dashboard' | 'mobile' | 'storefront' | 'wave';
type ActionIcon = 'eye' | 'code' | 'external' | 'docs';
type ActionVariant = 'primary' | 'secondary';

interface ProjectAction {
  label: string;
  href: string;
  variant: ActionVariant;
  icon?: ActionIcon;
  fullWidth?: boolean;
}

export interface ProjectCardData {
  title: string;
  description: string;
  tags: string[];
  preview: PreviewVariant;
  layout: 'horizontal' | 'vertical';
  imagePosition?: 'left' | 'right';
  actions: ProjectAction[];
  span?: 1 | 2;
}

const EyeIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const CodeIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 8L4 12l4 4M16 16l4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ExternalIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6v6M20 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DocsIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M10 13h4M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const actionIcons: Record<ActionIcon, () => ReactElement> = {
  eye: EyeIcon,
  code: CodeIcon,
  external: ExternalIcon,
  docs: DocsIcon,
};

const ProjectActionButton = ({ label, href, variant, icon, fullWidth }: ProjectAction) => {
  const Icon = icon ? actionIcons[icon] : null;

  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-[10px] font-bold tracking-[0.12em] transition-opacity hover:opacity-90';
  const variantClass =
    variant === 'primary'
      ? 'bg-accent text-ink'
      : 'border border-white/20 bg-transparent text-white hover:border-accent/50 hover:text-accent';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[baseClass, variantClass, fullWidth ? 'w-full' : ''].join(' ')}
    >
      {Icon && <Icon />}
      {label}
    </a>
  );
}

const ProjectContent = ({
  title,
  description,
  tags,
  actions,
}: Pick<ProjectCardData, 'title' | 'description' | 'tags' | 'actions'>) => {
  const hasFullWidthAction = actions.some((action) => action.fullWidth);

  return (
    <div className="flex flex-col justify-center p-6 lg:p-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      <h2 className="text-xl font-bold text-white lg:text-2xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted lg:text-base">{description}</p>

      <div
        className={[
          'mt-6 flex gap-3',
          hasFullWidthAction ? 'flex-col' : 'flex-wrap',
        ].join(' ')}
      >
        {actions.map((action) => (
          <ProjectActionButton key={action.label} {...action} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  tags,
  preview,
  layout,
  imagePosition = 'left',
  actions,
  span = 1,
}: ProjectCardData) => {
  const spanClass = span === 2 ? 'lg:col-span-2' : 'lg:col-span-1';

  if (layout === 'vertical') {
    return (
      <article
        className={[
          'group overflow-hidden rounded-lg border border-white/10 bg-panel transition-colors hover:border-accent/30',
          spanClass,
        ].join(' ')}
      >
        <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-[220px]">
          <ProjectPreview variant={preview} />
        </div>
        <ProjectContent
          title={title}
          description={description}
          tags={tags}
          actions={actions}
        />
      </article>
    );
  }

  const imageFirst = imagePosition === 'left';

  return (
    <article
      className={[
        'group overflow-hidden rounded-lg border border-white/10 bg-panel transition-colors hover:border-accent/30',
        spanClass,
      ].join(' ')}
    >
      <div className="grid lg:grid-cols-2">
        <div
          className={[
            'min-h-[200px] overflow-hidden lg:min-h-[280px]',
            imageFirst ? 'lg:order-1' : 'lg:order-2',
          ].join(' ')}
        >
          <ProjectPreview variant={preview} />
        </div>
        <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
          <ProjectContent
            title={title}
            description={description}
            tags={tags}
            actions={actions}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
