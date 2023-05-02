import { useState } from "react";

export { Test };

function Test() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Count</button>
      <p>{count}</p>
    </>
  );
}
