/* eslint-disable no-use-before-define */
import { useAsync } from './useAsync';

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
    run(fakePromise());
  };

  // use the details from the hook to conditionally render components
  // which depend on the status or the error
  return (
    <div>
      <button onClick={makeRequest} type="button">
        Make request
      </button>
      <div>Request status: {status}</div>
      {myData && <p>{myData}</p>}
      {error && <p>An error occurred</p>}
    </div>
  );
};

function fakePromise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify({ body: 'something from server' }));

      // error version
      // reject(JSON.stringify({ body: 'something from server' }));
    }, 1000);
  });

  return promise;
}

export default ExampleUseAsync;
