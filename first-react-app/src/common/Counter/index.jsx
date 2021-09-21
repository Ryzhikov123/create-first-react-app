import './styles.scss';

export const Counter = (props) => {
  return (
    <div className="counter-wrapper">
      <button className="remove-btn">x</button>
      <div className="count-value">{props.countValue}</div>
      <div className="controls">
        <button className="control-btn" onClick={props.handleDecrement}>
          -
        </button>
        <button className="control-btn" onClick={props.handleReset}>
          reset
        </button>
        <button className="control-btn" onClick={props.handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};
