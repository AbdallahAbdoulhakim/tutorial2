import React from "react";
import { SlSocialReddit } from "react-icons/sl";

const Header = () => {
  return (
    <div className="bg-green-500 min-h-20 text-slate-200 flex  justify-between items-center px-5 font-carter">
      <div className="text-2xl">JSON Placeholder</div>
      <SlSocialReddit size={45} />
    </div>
  );
};

export default Header;
