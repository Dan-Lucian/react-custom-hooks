/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { useDebounce } from './useDebounce';

// utils
import Example from '../Example';
import { fakeRequest } from '../utlis';

const ExampleUseDebounce = () => {
  const [textInput, setTextInput] = useState('');
  const [data, setData] = useState('');

  const makeRequest = () => {
    fakeRequest(0).then((res) => setData(res));
  };

  // you pass the async function, the delay and the state to dictate timer start
  useDebounce(makeRequest, 1000, [textInput]);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <Example title="useDebounce">
      <p>The request will be made only after user stopped typing for 1s</p>
      <input type="text" value={textInput} onChange={handleChange} />
      <p>Received: {data}</p>
    </Example>
  );
};

export default ExampleUseDebounce;
