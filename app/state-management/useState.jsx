"use client";

import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="w-100 mx-auto bg-black border-purple-600 mt-30 p-6 rounded-xl h-50">
      <p className="text-4xl text-center text-blue-500">{count}</p>

      <div className="flex justify-center gap-10 mt-4">
        <button
          onClick={decrement}
          className="p-2 text-2xl  cursor-pointer text-white bg-green-500 rounded-2xl px-5 font-bold"
        >
          -
        </button>

        <button
          onClick={increment}
          className="p-2 text-2xl cursor-pointer text-white bg-blue-500 rounded-2xl px-5 font-bold"
        >
          +
        </button>

        <button
          onClick={reset}
          className="p-2 text-2xl cursor-pointer text-white bg-red-500 rounded-2xl px-5 font-bold"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
