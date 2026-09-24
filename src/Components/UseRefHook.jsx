import {useRef, useState} from "react";

function UseRefHook() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const incrementState = () => {
    setCount(count + 1);
  }

  const incrementRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref Count: ", countRef.current);
  }

  return (
    <div>
    <p>State Count: {count}</p>
    <button onClick={incrementState}>Increment State</button> 

    <p>Ref Count: {countRef.current}</p>
    <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}

export default UseRefHook;