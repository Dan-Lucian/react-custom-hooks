import { useToggle } from './useToggle';

const ExampleUseToggle = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <article>
      <h2>Example useToggle</h2>
      <button type="button" onClick={toggle}>
        {isToggled && 'toggled'}
        {!isToggled && 'not toggled'}
      </button>
    </article>
  );
};

export default ExampleUseToggle;
