import { useEffect, useRef, useState } from 'react';

export const useScrollTop = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTop(entry.isIntersecting);
      },
      {
        threshold: 1.0,
        rootMargin: '0px',
      },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { isTop, observerRef };
};
