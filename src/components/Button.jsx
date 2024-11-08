import React from "react";

const Button = ({ content, selected, setSelected }) => {
  return (
    <button
      className={`border border-green-400 min-h-10 grid place-items-center active:scale-95 ${
        selected === content
          ? "bg-green-400 text-slate-800"
          : "bg-green-100 text-slate-400"
      }`}
      onClick={(e) => setSelected(content)}
    >
      {content}
    </button>
  );
};

export default Button;
