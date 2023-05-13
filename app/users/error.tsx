"use client";

import { useEffect } from "react";

//Error and reset are automatically passed in from the parent component
//Reset function will retrigger the failed action
interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
