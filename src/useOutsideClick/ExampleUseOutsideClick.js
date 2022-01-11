import { useRef } from 'react';
import Example from '../Example';
import { useOutsideClick } from './useOutsideClick';

const ExampleUseOutsideClick = () => {
  const refContainer = useRef(null);

  // needs a ref to the element
  const isClickOutside = useOutsideClick(refContainer);

  return (
    <Example title="useOutsideClick">
      <p>The text below tells where you clicked relative to the black box</p>
      <p>clicked {isClickOutside ? 'outside' : 'inside'}</p>
      <div
        ref={refContainer}
        style={{ width: '100px', height: '100px', backgroundColor: '#000' }}
      />
    </Example>
  );
};

export default ExampleUseOutsideClick;