import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

interface ActiveSectionContextValue {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(null);

interface ActiveSectionProviderProps {
  sectionIds: readonly string[];
  children: ReactNode;
}

export const ActiveSectionProvider = ({
  sectionIds,
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const scrollLockRef = useRef<string | null>(null);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resolveActiveSection = useCallback(() => {
    const lastSectionId = sectionIds[sectionIds.length - 1];
    const scrollBottom = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollBottom >= documentHeight - 120) {
      return lastSectionId;
    }

    const offset = window.innerHeight * 0.35;
    const scrollPos = window.scrollY + offset;
    let current = sectionIds[0];

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPos) {
        current = id;
      }
    }

    return current;
  }, [sectionIds]);

  const updateActiveSection = useCallback(() => {
    if (scrollLockRef.current) {
      setActiveSection(scrollLockRef.current);
      return;
    }

    setActiveSection(resolveActiveSection());
  }, [resolveActiveSection]);

  const releaseScrollLock = useCallback(() => {
    scrollLockRef.current = null;
    setActiveSection(resolveActiveSection());
  }, [resolveActiveSection]);

  useEffect(() => {
    updateActiveSection();

    const handleScroll = () => {
      if (scrollLockRef.current) {
        setActiveSection(scrollLockRef.current);

        if (scrollEndTimerRef.current) {
          clearTimeout(scrollEndTimerRef.current);
        }

        scrollEndTimerRef.current = setTimeout(releaseScrollLock, 150);
        return;
      }

      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);

      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [releaseScrollLock, updateActiveSection]);

  const scrollToSection = useCallback((id: string) => {
    scrollLockRef.current = id;
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const value = useMemo(
    () => ({ activeSection, setActiveSection, scrollToSection }),
    [activeSection, scrollToSection],
  );

  return (
    <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
  );
};

const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within ActiveSectionProvider');
  }

  return context;
};

export default useActiveSection;
