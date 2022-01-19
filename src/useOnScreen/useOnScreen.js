import { useState, useEffect, useRef } from 'react';

/**
 * Determines if element is visible on screen.
 * Or if element is x px away from being on the screen.
 *
 * @param {string} [rootMargin="0px"] default="0px", offsreen trigger corrds.
 *
 * @returns {boolean} if the element is visible.
 */
function useOnScreen(rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.unobserve(ref.current);
      };
    }
  }, [rootMargin]);

  return [ref, isIntersecting];
}

export { useOnScreen };
