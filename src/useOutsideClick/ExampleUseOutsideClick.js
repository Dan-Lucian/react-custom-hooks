import Example from '../Example';
import { useOutsideClick } from './useOutsideClick';

const ExampleUseOutsideClick = () => {
  // returns a ref to be put on the component
  const [refContainer, isClickOutside] = useOutsideClick();

  const stylesBox = {
    width: '100px',
    height: '100px',
    backgroundColor: isClickOutside ? 'blue' : 'red',
  };

  return (
    <Example title="useOutsideClick">
      <p>The text below tells where you clicked relative to the black box</p>
      <p>clicked {isClickOutside ? 'outside' : 'inside'}</p>
      <div ref={refContainer} style={stylesBox} />
    </Example>
  );
};

export default ExampleUseOutsideClick;
