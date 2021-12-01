import { useToggle } from './useToggle';
import Example from '../Example';

const ExampleUseToggle = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <Example title="useToggle">
      <button type="button" onClick={toggle}>
        {isToggled && 'toggled'}
        {!isToggled && 'not toggled'}
      </button>
    </Example>
  );
};

export default ExampleUseToggle;
