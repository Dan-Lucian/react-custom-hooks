import { useEffect } from 'react';
import { useTimeout } from '../useTimeout/useTimeout';

/**
 * Runs a timeout only after a state has stopped changing for an amount of ms.
 * It "debounces" the previous timeout if a state in the dep array has changed.
 * @param {function} callback The function to run.
 * @param {number} delay delay in ms.
 * @param {array} dependencies array of dependencies.
 */
const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, [clear]);
};

export { useDebounce };
