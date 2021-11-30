import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';
import ExampleUseScrollDirection from './useScrollDirection/ExampleUseScrollDirection';
import ExampleUseLocalStorage from './useLocalStorage/ExampleUseLocalStorage';
import ExampleUseAsync from './useAsync/ExampleUseAsync';

const App = () => (
  <div style={{ height: '2000px' }}>
    <h1>Cutom Hooks</h1>
    <ExampleUseToggle />
    <ExampleUseTimeout />
    <ExampleUseScrollDirection />
    <ExampleUseLocalStorage />
    <ExampleUseAsync />
  </div>
);

export default App;
