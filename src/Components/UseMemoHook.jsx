import { useMemo, useState } from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  //only calculate the square when the number changes, 
  // not when the count changes because we are passing number 
  // as dependency in the useMemo hook.
  const square = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <h2>Count: {count}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseMemoHook;