import type { ReactElement } from 'react';

type PreviewVariant = 'dashboard' | 'mobile' | 'storefront' | 'wave';

interface ProjectPreviewProps {
  variant: PreviewVariant;
}

const DashboardPreview = () => {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden bg-gradient-to-br from-panel-header to-ink lg:min-h-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(0,245,255,0.18),transparent_55%)]" />
      <div className="absolute inset-6 rounded border border-white/10 bg-ink/50 p-4">
        <div className="mb-3 flex gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-accent/40" />
          <span className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded border border-white/5 bg-accent/10"
            />
          ))}
        </div>
        <div className="mt-3 flex h-20 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-accent/35"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const MobilePreview = () => {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden bg-gradient-to-br from-panel-header to-ink lg:min-h-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,245,255,0.15),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-[85%] w-[45%] max-w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white/15 bg-ink/80 p-2 shadow-[0_0_40px_rgba(0,245,255,0.12)]">
        <div className="mb-2 h-1 w-8 rounded-full bg-white/20 mx-auto" />
        <div className="space-y-2 rounded-lg bg-panel p-2">
          <div className="h-8 rounded bg-accent/20" />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="aspect-square rounded bg-white/5" />
            <div className="aspect-square rounded bg-accent/10" />
          </div>
          <div className="h-12 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

const StorefrontPreview = () => {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden bg-gradient-to-br from-panel-header to-ink lg:min-h-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(0,245,255,0.12),transparent_55%)]" />
      <div className="absolute inset-6 rounded border border-white/10 bg-ink/40 p-3">
        <div className="mb-3 h-4 w-24 rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded border border-white/5 bg-panel">
              <div className="h-2/3 bg-accent/10" />
              <div className="p-1.5">
                <div className="h-1.5 w-full rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const WavePreview = () => {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden bg-gradient-to-br from-panel-header to-ink lg:min-h-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(139,92,246,0.2),transparent_50%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M0 ${120 + i * 30} Q100 ${80 + i * 20} 200 ${130 + i * 25} T400 ${110 + i * 30} V300 H0 Z`}
            fill="url(#waveGrad)"
            opacity={0.5 - i * 0.12}
          />
        ))}
      </svg>
    </div>
  );
}

const previews: Record<PreviewVariant, () => ReactElement> = {
  dashboard: DashboardPreview,
  mobile: MobilePreview,
  storefront: StorefrontPreview,
  wave: WavePreview,
};

const ProjectPreview = ({ variant }: ProjectPreviewProps) => {
  const Preview = previews[variant];
  return <Preview />;
}

export default ProjectPreview;
