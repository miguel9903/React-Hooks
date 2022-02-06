import { useState, useReducer } from "react";

const initialState = {
  contador: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increase":
      return { contador: state.contador + 1 };
    case "decrease":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: payload };
    case "reset":
      return { contador: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <p>Contador: {state.contador} </p>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "set", payload: inputValue })}>
        Set
      </button>
    </>
  );
};

export default UseReducer;
