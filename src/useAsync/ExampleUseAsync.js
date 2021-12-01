/* eslint-disable no-use-before-define */
import { useAsync } from './useAsync';

// utils
import Example from '../Example';
import { fakeRequest } from '../utlis';

const ExampleUseAsync = () => {
  // the hook provides with all the async operation details
  const {
    data: myData,
    setData,
    setError,
    error,
    status,
    run,
  } = useAsync({ status: 'idle' });

  const makeRequest = () => {
    // you just pass your async promise-based func to the run function
    // all the data after this async operation is available from the hook
    run(fakeRequest(1000));
  };

  // use the details from the hook to conditionally render components
  // which depend on the status or the error
  return (
    <Example title="useAsync">
      <button onClick={makeRequest} type="button">
        Make request
      </button>
      <div>Request status: {status}</div>
      {myData && <p>{myData}</p>}
      {error && <p>An error occurred</p>}
    </Example>
  );
};

export default ExampleUseAsync;
