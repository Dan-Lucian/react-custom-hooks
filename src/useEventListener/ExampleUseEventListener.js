import { useState, useCallback } from 'react';
import { useEventListener } from './useEventListener';

// utils
import Example from '../Example';

const ExampleUseEventListener = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback
  // so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // hook use
  useEventListener('mousemove', handler);

  return (
    <Example title="useEventListener">
      <p>Mouse coords by 'mousmemove'</p>
      <p>
        x: {coords.x}, y: {coords.y}
      </p>
    </Example>
  );
};

export default ExampleUseEventListener;
