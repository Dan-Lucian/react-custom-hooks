import { useHover } from './useHover';

// utils
import Example from '../Example';

const ExampleUseHover = () => {
  const [hoverRef, isHovered] = useHover();

  const stylesBox = {
    width: '100px',
    height: '100px',
    background: isHovered ? 'red' : 'blue',
  };

  return (
    <Example title="useHover">
      <p>Hover over the square</p>
      <div ref={hoverRef} style={stylesBox} />
    </Example>
  );
};

export default ExampleUseHover;
