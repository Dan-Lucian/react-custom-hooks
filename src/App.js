import './App.css';
import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';
import ExampleUseScrollDirection from './useScrollDirection/ExampleUseScrollDirection';
import ExampleUseLocalStorage from './useLocalStorage/ExampleUseLocalStorage';
import ExampleUseAsync from './useAsync/ExampleUseAsync';
import ExampleUseDebounce from './useDebounce/ExampleUseDebounce';
import ExampleUseArray from './useArray/ExampleUseArray';

const App = () => (
  <div>
    <h1>Cutom Hooks</h1>
    <ol className="list-custom-hooks">
      <li>
        <a href="#use-toggle">useToggle</a>
      </li>
      <li>
        <a href="#use-timeout">usetimeout</a>
      </li>
      <li>
        <a href="#use-scroll-direction">useScrollDirection</a>
      </li>
      <li>
        <a href="#use-local-storage">uselocalStorage</a>
      </li>
      <li>
        <a href="#use-async">useAsync</a>
      </li>
      <li>
        <a href="#use-debounce">useDebounce</a>
      </li>
      <li>
        <a href="#use-array">useArray</a>
      </li>
    </ol>

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
