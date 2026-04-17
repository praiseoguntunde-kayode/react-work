"use client";

import { useState } from "react";
export default function Message() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function result() {
    // setDisplayText(text);
    setDisplayText([...displayText, text]);
    setText("");
  }

  return (
    <div className="p-4 w-100 h-50 mx-auto mt-10 border rounded-2xl">
      <input
        type="text"
        placeholder="Your Name"
        value={text}
        onChange={handleChange}
        name="name"
        className="p-2 border w-full rounded-2xl text-center text-lg font-bold"
      />

      <button
        onClick={result}
        className="ml-27 p-2 border rounded-2xl text-center mt-2 text-lg font-bold"
      >
        Show Message
      </button>

      {/* <p className="text-lg font-bold text-center">{displayText}</p> */}

      {displayText.map((text, index) => (
        <p key={index} className="text-lg font-bold text-center">
          {text}
        </p>
      ))}
    </div>
  );
}
