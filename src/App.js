import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';
import ExampleUseScrollDirection from './useScrollDirection/ExampleUseScrollDirection';
import ExampleUseLocalStorage from './useLocalStorage/ExampleUseLocalStorage';
import ExampleUseAsync from './useAsync/ExampleUseAsync';
import ExampleUseDebounce from './useDebounce/ExampleUseDebounce';
import ExampleUseArray from './useArray/ExampleUseArray';

const App = () => (
  <div style={{ height: '2000px' }}>
    <h1>Cutom Hooks</h1>
    <ExampleUseToggle />
    <hr />
    <ExampleUseTimeout />
    <hr />
    <ExampleUseScrollDirection />
    <hr />
    <ExampleUseLocalStorage />
    <hr />
    <ExampleUseAsync />
    <hr />
    <ExampleUseDebounce />
    <hr />
    <ExampleUseArray />
    <hr />
  </div>
);

export default App;
