import { useEffect, useState } from 'react';

/**
 * Tracks if a click is outside an element.
 * @param {node} ref a ref to the element.
 *
 * @returns {boolean} true if clicked outside, false if not.
 */
const useOutsideClick = (ref) => {
  const [isClickOutside, setIsClickOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsClickOutside(true);
      } else {
        setIsClickOutside(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [ref]);

  return isClickOutside;
};

export { useOutsideClick };
