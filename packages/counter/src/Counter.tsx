import React, { useState } from "react";
import { Button } from "@lerna-monorepo/button";

type CounterProps = {};
export const Counter: React.FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}></Button>
    </>
  );
};

export default Counter;
