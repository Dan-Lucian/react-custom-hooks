import Example from '../Example';
import { useStateWithHistory } from './useStateWithHistory';

const ExampleUseStateWithHistory = () => {
  const [value, setValue, { history, current, back, forward, jumpTo }] =
    useStateWithHistory(0);

  return (
    <Example title="useStateWithHistory">
      <p>Current value: {value}</p>
      <p>History: {history.toString()}</p>
      <p>History current: {current}</p>
      <button type="button" onClick={() => setValue((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
      <button type="button" onClick={forward}>
        Forward
      </button>
      <button type="button" onClick={() => jumpTo(1)}>
        Go to 1
      </button>
    </Example>
  );
};

export default ExampleUseStateWithHistory;
