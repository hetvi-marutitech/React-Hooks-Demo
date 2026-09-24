import { useState, useEffect } from "react";
import UseEffectHook from "./UseEffectHook.jsx";

function UseStateHook() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [toggle, SetToggle] = useState(true);

  //Only once on mount
  useEffect(() => {
    console.log("Mounted");
  }, []);

  //Only on the counter value changes
  useEffect(() => {
    console.log("Counter value changes");
  }, [count]);

  return (
    <div>
      <input type="text" placeholder="Type here.." value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>Input Value is: <b>{inputValue}</b></p>

      <p> You clicked {count} times </p>
      <button onClick = {() => setCount(count + 1)}> Counter </button>

      {toggle && <UseEffectHook/>}
      <button onClick = {() => SetToggle(!toggle)}> toggle </button>
    </div>

  );
}

export default UseStateHook;