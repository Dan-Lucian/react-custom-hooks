import { useScrollDirection } from './useScrollDirection';

const ExampleUseScrollDirection = () => {
  const direction = useScrollDirection('down');
  console.log('render');

  return <div>{direction}</div>;
};

export default ExampleUseScrollDirection;
