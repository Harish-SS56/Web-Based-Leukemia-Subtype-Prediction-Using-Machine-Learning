
import { useState, useEffect, RefObject } from "react";

export function useScrollSpy(
  sectionRefs: RefObject<HTMLElement>[],
  options: {
    threshold?: number;
    rootMargin?: string;
  } = {}
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const { threshold = 0.2, rootMargin = "0px 0px -70% 0px" } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold, rootMargin }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs, options]);

  return activeId;
}
