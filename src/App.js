import './App.css';

import LinksExamples from './LinksExamples';
import ExampleUseToggle from './useToggle/ExampleUseToggle';
import ExampleUseTimeout from './useTimeout/ExampleUseTimeout';
import ExampleUseScrollDirection from './useScrollDirection/ExampleUseScrollDirection';
import ExampleUseLocalStorage from './useLocalStorage/ExampleUseLocalStorage';
import ExampleUseAsync from './useAsync/ExampleUseAsync';
import ExampleUseDebounce from './useDebounce/ExampleUseDebounce';
import ExampleUseArray from './useArray/ExampleUseArray';
import ExampleUseOutsideClick from './useOutsideClick/ExampleUseOutsideClick';
import ExampleUseStateWithHistory from './useStateWithHistory/ExampleUseStateWithHistory';
import ExampleUseEventListener from './useEventListener/ExampleUseEventListener';
import ExampleUseOnScreen from './useOnScreen/ExampleUseOnScreen';
import ExampleUseHover from './useHover/ExampleUseHover';
import ExampleUseAnimation from './useAnimation/ExampleUseAnimation';
import ExampleUseCanvas from './useCanvas/ExampleUseCanvas';

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

    <LinksExamples />

    <ExampleUseToggle />
    <ExampleUseTimeout />
    <ExampleUseScrollDirection />
    <ExampleUseLocalStorage />
    <ExampleUseAsync />
    <ExampleUseDebounce />
    <ExampleUseArray />
    <ExampleUseOutsideClick />
    <ExampleUseStateWithHistory />
    <ExampleUseEventListener />
    <ExampleUseOnScreen />
    <ExampleUseHover />
    <ExampleUseAnimation />
    <ExampleUseCanvas />
  </main>
);

export default App;
