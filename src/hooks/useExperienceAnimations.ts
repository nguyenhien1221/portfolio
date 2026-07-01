import { useCallback, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const useExperienceAnimations = (
  activeIndex: number,
  setActiveIndex: (index: number) => void,
) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const isFirstRender = useRef(true);

  const animatePanelIn = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    animate(panel, {
      opacity: [0, 1],
      y: [20, 0],
      duration: 550,
      ease: 'out(4)',
    });

    const title = panel.querySelector('.experience-panel-title');
    const description = panel.querySelector('.experience-panel-desc');
    const tags = panel.querySelectorAll('.experience-tag');

    if (title) {
      animate(title, {
        opacity: [0, 1],
        x: [-16, 0],
        duration: 450,
        ease: 'out(3)',
        delay: 80,
      });
    }

    if (description) {
      animate(description, {
        opacity: [0, 1],
        y: [12, 0],
        duration: 500,
        ease: 'out(3)',
        delay: 160,
      });
    }

    if (tags.length > 0) {
      animate(tags, {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 400,
        ease: 'out(3)',
        delay: stagger(60, { start: 280 }),
      });
    }

    isAnimatingRef.current = false;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      animatePanelIn();
      return;
    }

    animatePanelIn();
  }, [activeIndex, animatePanelIn]);

  const handleTabClick = (index: number, button: HTMLButtonElement) => {
    if (index === activeIndex || isAnimatingRef.current) {
      return;
    }

    animate(button, {
      x: [0, 6, 0],
      duration: 450,
      ease: 'out(3)',
    });

    const panel = panelRef.current;
    if (!panel) {
      setActiveIndex(index);
      return;
    }

    isAnimatingRef.current = true;

    animate(panel, {
      opacity: [1, 0],
      y: [0, -16],
      duration: 220,
      ease: 'in(3)',
      onComplete: () => {
        setActiveIndex(index);
      },
    });
  };

  return { panelRef, handleTabClick };
};

export default useExperienceAnimations;
