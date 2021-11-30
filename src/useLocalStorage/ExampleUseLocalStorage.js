import { useLocalStorage } from './useLocalStorage';

const ExampleUseLocalStorage = () => {
  // textInput is saved in local storage on every change
  const [textInput, setTextInput] = useLocalStorage('text');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <p>
        The text written in the input is saved in local storage in real time
      </p>
      <input type="text" value={textInput} onChange={handleChange} />
    </div>
  );
};

export default ExampleUseLocalStorage;
