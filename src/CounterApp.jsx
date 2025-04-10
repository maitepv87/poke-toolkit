import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";
import "./App.css";

export const CounterApp = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux-Toolkit Demo</h1>
      <div className="card">
        <p>count is: {value}</p>
        <p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(3))}>
            increment By 3
          </button>
        </p>
      </div>
    </>
  );
};
