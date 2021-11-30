import { useRef, useState, useEffect } from 'react';

/**
 * Returns last vertical scroll direction.
 *
 * @param {string} initialState 'up' or 'down'.
 *
 * @return {string} - 'up' or 'down'.
 */

const useScrollDirection = (initialState) => {
  const lastScrollTop = useRef(0);
  const [scrollDirection, setScrollDirection] = useState(initialState);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        setScrollDirection('down');
      } else {
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        setScrollDirection('up');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

export { useScrollDirection };
