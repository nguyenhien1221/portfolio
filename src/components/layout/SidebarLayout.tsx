import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="mx-auto min-h-svh max-w-7xl px-6 pt-16 lg:flex lg:gap-4 lg:px-8 lg:pt-0 xl:gap-16">
      <Sidebar />
      <div className="flex flex-1 flex-col pb-8 lg:py-24">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
