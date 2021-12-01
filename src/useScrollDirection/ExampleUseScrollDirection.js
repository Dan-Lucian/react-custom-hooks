import { useScrollDirection } from './useScrollDirection';

const ExampleUseScrollDirection = () => {
  const direction = useScrollDirection('down');
  console.log('render');

  return (
    <article id="use-scroll-direction">
      <h2>useScrollDirection</h2>
      <p>{direction}</p>
    </article>
  );
};

export default ExampleUseScrollDirection;
