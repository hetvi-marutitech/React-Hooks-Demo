import { useInsertionEffect } from "react";

function UseInsertionEffect() {
  useInsertionEffect(() => {
    const style = document.createElement("style");

    style.textContent = `
      .dynamic-title {
        color: purple;
        font-size: 32px;
      }
    `;

    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <div>
      <h1 className="dynamic-title">
        Hello world!!
      </h1>
    </div>
  );
}

export default UseInsertionEffect;