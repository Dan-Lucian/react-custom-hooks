import { useScrollDirection } from './useScrollDirection';

// utils
import Example from '../Example';

const ExampleUseScrollDirection = () => {
  const direction = useScrollDirection('down');

  return (
    <Example title="useScrollDirection">
      <p>{direction}</p>
    </Example>
  );
};

export default ExampleUseScrollDirection;
