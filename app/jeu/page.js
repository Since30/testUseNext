"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const jeu = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    return () => console.log("le composant est démonté");
  }, [number]);

  return (
    <>
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <div>{number}</div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </>
  );
};

export default jeu;
