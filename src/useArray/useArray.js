import { useState } from 'react';

const useArray = (initialArray) => {
  const [array, setArray] = useState(initialArray);

  // push an element to the end
  const push = (element) => {
    setArray((a) => [...a, element]);
  };

  // filter with a callback
  const filter = (callback) => {
    setArray((a) => a.filter(callback));
  };

  // update an element at index position with a new element
  const update = (index, newElement) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  };

  // remove an element at index position
  const remove = (index) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  // clear whole array
  const clear = () => {
    setArray([]);
  };

  // instead of setArray return "set"
  return { array, set: setArray, push, filter, update, remove, clear };
};

export { useArray };
