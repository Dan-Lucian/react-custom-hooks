/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { useDebounce } from './useDebounce';
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
    <article>
      <h2>Example useDebounce</h2>
      <p>The request will be made only after user stopped typing for 1s</p>
      <input type="text" value={textInput} onChange={handleChange} />
      <p>Received: {data}</p>
    </article>
  );
};

export default ExampleUseDebounce;
