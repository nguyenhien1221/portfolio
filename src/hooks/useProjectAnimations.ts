import { useEffect, useRef, type MouseEvent } from 'react';
import { animate, createScope, onScroll, stagger } from 'animejs';

const useProjectAnimations = () => {
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    scopeRef.current = createScope({ root }).add(() => {
      animate('.project-card', {
        opacity: [0, 1],
        y: [40, 0],
        duration: 900,
        ease: 'out(4)',
        delay: stagger(120),
        autoplay: onScroll({
          target: '.project-card',
          enter: 'bottom bottom-=80',
          leave: 'top bottom+=80',
          sync: true,
        }),
      });

      animate('.project-tag', {
        opacity: [0, 1],
        x: [-12, 0],
        duration: 600,
        ease: 'out(3)',
        delay: stagger(60, { start: 300 }),
        autoplay: onScroll({
          target: '.project-card',
          enter: 'bottom bottom-=80',
          sync: true,
        }),
      });
    });

    return () => {
      scopeRef.current?.revert();
    };
  }, []);

  const handleProjectEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget.closest('.project-card');
    if (!card) {
      return;
    }

    const thumb = card.querySelector('.project-thumb');
    const arrow = card.querySelector('.project-arrow');

    if (thumb) {
      animate(thumb, {
        scale: 1.04,
        duration: 500,
        ease: 'out(3)',
      });
    }

    if (arrow) {
      animate(arrow, {
        x: 6,
        duration: 400,
        ease: 'out(3)',
      });
    }
  };

  const handleProjectLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget.closest('.project-card');
    if (!card) {
      return;
    }

    const thumb = card.querySelector('.project-thumb');
    const arrow = card.querySelector('.project-arrow');

    if (thumb) {
      animate(thumb, {
        scale: 1,
        duration: 500,
        ease: 'out(3)',
      });
    }

    if (arrow) {
      animate(arrow, {
        x: 0,
        duration: 400,
        ease: 'out(3)',
      });
    }
  };

  return {
    rootRef,
    handleProjectEnter,
    handleProjectLeave,
  };
};

export default useProjectAnimations;
