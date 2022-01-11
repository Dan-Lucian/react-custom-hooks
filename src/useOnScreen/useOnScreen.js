import { useState, useEffect } from 'react';

/**
 * Determines if element is visible on screen.
 * Or if element is x px away from being on the screen.
 *
 * @param {Object} ref element ref.
 * @param {string} [rootMargin="0px"] default="0px", offsreen trigger corrds.
 *
 * @returns {boolean} if the element is visible.
 */
function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
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
  }, []);

  return isIntersecting;
}

export { useOnScreen };
