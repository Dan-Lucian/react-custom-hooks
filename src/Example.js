/* eslint-disable react/prop-types */
const Example = ({ children, title }) => {
  const id = title
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('-');

  console.log(`render: ${id}`);

  return (
    <article id={id}>
      <hr />
      <h2>
        <a href="#main-title">⬆️</a>
        {title}
      </h2>
      {children}
    </article>
  );
};

export default Example;
