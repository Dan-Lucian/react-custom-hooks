import { useRef, useEffect } from 'react';

/**
 * Logic for a canvas component to draw something on it.
 *
 * @param {Function} draw a drawing function with 2 params:
 * context and countFrame.
 *
 * @returns {Object} - a ref to put on the canvas.
 */
const useCanvas = (draw) => {
  const refCanvas = useRef(null);

  useEffect(() => {
    const canvas = refCanvas.current;
    const ctx = canvas.getContext('2d');
    let countFrame = 0;
    let idAnimationFrame;

    const render = () => {
      countFrame += 1;
      draw(ctx, countFrame);
      idAnimationFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(idAnimationFrame);
    };
  }, [draw]);

  return refCanvas;
};

export { useCanvas };
