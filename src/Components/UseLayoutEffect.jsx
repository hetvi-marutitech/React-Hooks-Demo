import { useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect() {
  const boxRef = useRef(null);

  const [height, setHeight] = useState(0);

  UseLayoutEffect(() => {
    const box = boxRef.current;

    if (box) {
      setHeight(box.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <h2>Box Measurement</h2>

      <div ref={boxRef}>
        Hello World!
      </div>

      <p>Box height: {height}px</p>
    </div>
  );
}

export default UseLayoutEffect;