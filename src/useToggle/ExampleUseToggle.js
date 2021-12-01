import { useToggle } from './useToggle';

const ExampleUseToggle = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <article id="use-toggle">
      <h2>useToggle</h2>
      <button type="button" onClick={toggle}>
        {isToggled && 'toggled'}
        {!isToggled && 'not toggled'}
      </button>
    </article>
  );
};

export default ExampleUseToggle;
