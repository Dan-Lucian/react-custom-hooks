/* eslint-disable react/prop-types */
const Example = ({ children, title }) => {
  const id = title
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('-');

  console.log(`id: ${id}`);

  return (
    <article id={id}>
      <hr />
      <h2>
        {title}
        <a href="#main-title">⬆️</a>
      </h2>
      {children}
    </article>
  );
};

export default Example;
