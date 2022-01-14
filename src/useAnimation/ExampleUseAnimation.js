import { useState } from 'react';

import Example from '../Example';
import { useAnimation } from './useAnimation';

const ExampleUseAnimation = () => {
  const [mounted, setMounted] = useState(true);

  const stylesContainer = {
    width: '200px',
    height: '400px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <Example title="useAnimation">
      <button type="button" onClick={() => setMounted((prev) => !prev)}>
        {mounted ? 'unmount' : 'mount'}
      </button>
      <div style={stylesContainer}>{mounted && <Balls />}</div>
    </Example>
  );
};

const Balls = () => {
  // animation can be triggered only on mount
  const animation1 = useAnimation('elastic', 1000, 0);
  const animation2 = useAnimation('elastic', 1500, 0);
  const animation3 = useAnimation('elastic', 2000, 0);

  const getStylesBall = (animationCompletion) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'blue',
    transform: `translateY(${animationCompletion * 200 - 100}px)`,
  });

  return (
    <>
      <div style={getStylesBall(animation1)} />
      <div style={getStylesBall(animation2)} />
      <div style={getStylesBall(animation3)} />
    </>
  );
};

export default ExampleUseAnimation;
