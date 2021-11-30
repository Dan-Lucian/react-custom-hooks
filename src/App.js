import { useTimeout } from './useTimeout/useTimeout';
import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';

const App = () => (
  <div className="App">
    <h1>Cutom Hooks</h1>
    <ExampleUseToggle />
    <ExampleUseTimeout />
  </div>
);

export default App;
