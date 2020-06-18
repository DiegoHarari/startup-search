import React, { useState } from "react";

function Help() {
  const [count, setCount] = useState(0);

  function handleSubmit() {
    console.log(count);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => handleSubmit()}>Enviar count</button>
    </div>
  );
}

export default Help;
