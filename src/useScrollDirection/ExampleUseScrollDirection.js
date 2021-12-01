import { useScrollDirection } from './useScrollDirection';

const ExampleUseScrollDirection = () => {
  const direction = useScrollDirection('down');
  console.log('render');

  return (
    <article>
      <h2>Example useScrollDirection</h2>
      <p>{direction}</p>
    </article>
  );
};

export default ExampleUseScrollDirection;
