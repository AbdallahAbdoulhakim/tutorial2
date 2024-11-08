import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-green-500 min-h-20 text-slate-200 grid place-items-center">
      <div className="text-2xl">Copyright &copy; {date.getFullYear()} </div>
    </div>
  );
};

export default Footer;
