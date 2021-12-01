import { useLocalStorage } from './useLocalStorage';

// utils
import Example from '../Example';

const ExampleUseLocalStorage = () => {
  // textInput is saved in local storage on every change
  const [textInput, setTextInput] = useLocalStorage('text');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <Example title="useLocalStorage">
      <p>
        The text written in the input is saved in local storage in real time
      </p>
      <input type="text" value={textInput} onChange={handleChange} />
    </Example>
  );
};

export default ExampleUseLocalStorage;
