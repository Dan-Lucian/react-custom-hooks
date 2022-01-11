import { useRef } from 'react';
import { useOnScreen } from './useOnScreen';

// utils
import Example from '../Example';

const ExampleUseOnScreen = () => {
  const elementRef = useRef();
  const onScreen = useOnScreen(elementRef, '-100px');

  return (
    <Example title="useOnScreen">
      <div
        ref={elementRef}
        style={{
          width: '100px',
          height: '300px',
          backgroundColor: onScreen ? 'blue' : 'red',
        }}
      />
      <p>
        The box is considered on screen when more than 100px of it's height is
        visible
      </p>
      <p>onScreen: {onScreen.toString()}</p>
    </Example>
  );
};

export default ExampleUseOnScreen;
