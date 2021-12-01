import { useLocalStorage } from './useLocalStorage';

const ExampleUseLocalStorage = () => {
  // textInput is saved in local storage on every change
  const [textInput, setTextInput] = useLocalStorage('text');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <article id="use-local-storage">
      <h2>useLocalStorage</h2>
      <p>
        The text written in the input is saved in local storage in real time
      </p>
      <input type="text" value={textInput} onChange={handleChange} />
    </article>
  );
};

export default ExampleUseLocalStorage;
