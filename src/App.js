import './App.css';
import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';
import ExampleUseScrollDirection from './useScrollDirection/ExampleUseScrollDirection';
import ExampleUseLocalStorage from './useLocalStorage/ExampleUseLocalStorage';
import ExampleUseAsync from './useAsync/ExampleUseAsync';
import ExampleUseDebounce from './useDebounce/ExampleUseDebounce';
import ExampleUseArray from './useArray/ExampleUseArray';
import ExampleUseOutsideClick from './useOutsideClick/ExampleUseOutsideClick';

const App = () => (
  <main className="wrapper-main">
    <h1 id="main-title">Cutom Hooks</h1>
    <a
      target="_self"
      title="Github markdown doesn't support blank (("
      href="https://github.com/Dan-Lucian/react-custom-hooks"
    >
      Go back to github repo
    </a>
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
      <li>
        <a href="#use-outside-click">useOutsideClick</a>
      </li>
    </ol>

    <ExampleUseToggle />
    <ExampleUseTimeout />
    <ExampleUseScrollDirection />
    <ExampleUseLocalStorage />
    <ExampleUseAsync />
    <ExampleUseDebounce />
    <ExampleUseArray />
    <ExampleUseOutsideClick />
  </main>
);

export default App;
