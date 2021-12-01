import { useState } from 'react';
import { useTimeout } from './useTimeout';

const ExampleUseTimeout = () => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber((prev) => prev + 1);

  // will run once on mount
  // can't negate with one post clear()
  // clear will clear the timeout
  // reset can be used to trigger it again
  const { clear, reset } = useTimeout(increment, 1000);

  return (
    <article id="use-timeout">
      <h2>useTimeout</h2>
      <p>{number}</p>
      <button type="button" onClick={clear}>
        Clear
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </article>
  );
};

export default ExampleUseTimeout;
