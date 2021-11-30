import { useToggle } from './useToggle';

const ExampleUseToggle = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <button type="button" onClick={toggle}>
      {isToggled && 'toggled'}
      {!isToggled && 'not toggled'}
    </button>
  );
};

export default ExampleUseToggle;
