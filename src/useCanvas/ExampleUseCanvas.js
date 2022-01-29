/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import PropTypes from 'prop-types';
import { useCanvas } from './useCanvas';

// utils
import Example from '../Example';

// <canvas /> component to go with the hook
// accepts draw function which does the drawing
const Canvas = ({ draw }) => {
  const refCanvas = useCanvas(draw);

  return (
    <canvas
      ref={refCanvas}
      width="80px"
      height="80px"
      style={{ background: 'blue' }}
    />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func,
};

const ExampleUseCanvas = () => (
  <Example title="useCanvas">
    <p>The hook has to be used with this Canvas component</p>
    <Canvas draw={draw} />
  </Example>
);

// the function which does the drawing
// countFrame is an integer which gets incremented every requestAnimationFrame
const draw = (ctx, countFrame) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(30, 30, 20 * Math.sin(countFrame * 0.03) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};

export default ExampleUseCanvas;
