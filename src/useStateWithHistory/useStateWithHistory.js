import { useState, useRef, useCallback } from 'react';

/**
 * Creates a state that remembers "capacity" amount of values it has been in the past.
 *
 * @param {node} ref a ref to the element.
 * @param {object} object a configuration object with capacity prop
 *
 * @returns {array} [value, set {back, forward, jumpTo}].
 */
const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const currentRef = useRef(0);

  const set = useCallback(
    (v) => {
      const resolvedValue = typeof v === 'function' ? v(value) : v;
      if (historyRef.current[currentRef.current] !== resolvedValue) {
        if (currentRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(currentRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        currentRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value]
  );

  const back = useCallback(() => {
    if (currentRef.current <= 0) return;
    currentRef.current -= 1;
    setValue(historyRef.current[currentRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (currentRef.current >= historyRef.current.length - 1) return;
    currentRef.current += 1;
    setValue(historyRef.current[currentRef.current]);
  }, []);

  const jumpTo = useCallback((idx) => {
    if (idx < 0 || idx > historyRef.current.length - 1) return;
    currentRef.current = idx;
    setValue(historyRef.current[currentRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      current: currentRef.current,
      back,
      forward,
      jumpTo,
    },
  ];
};

export { useStateWithHistory };
