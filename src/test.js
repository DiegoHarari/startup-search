import React from "react";
import { useParams } from "react-router-dom";

function Test(props) {
  const { name } = useParams();
  return (
    <div>
      <p>i am {name}</p>
    </div>
  );
}

export default Test;
