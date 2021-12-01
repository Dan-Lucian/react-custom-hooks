import { useArray } from './useArray';

const ExampleUseArray = () => {
  const initialArray = [1, 2, 3, 4, 5];
  const { array, set, push, filter, update, remove, clear } =
    useArray(initialArray);

  return (
    <article id="use-array">
      <h1>useArray</h1>
      <p>{JSON.stringify(array)}</p>
      <div>
        <button onClick={() => set([1, 2, 3, 4, 5, 6])} type="button">
          set([1, 2, 3, 4, 5, 6])
        </button>
        <button onClick={() => push(0)} type="button">
          push(0)
        </button>
        <button onClick={() => filter((n) => n % 2 !== 0)} type="button">
          filter odd
        </button>
        <button onClick={() => update(1, 0)} type="button">
          update(1, 0)
        </button>
        <button onClick={() => remove(0)} type="button">
          remove(0)
        </button>
        <button onClick={() => clear()} type="button">
          clear()
        </button>
      </div>
    </article>
  );
};

export default ExampleUseArray;
