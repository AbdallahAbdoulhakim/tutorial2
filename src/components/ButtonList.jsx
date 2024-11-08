import React from "react";
import Button from "./Button";

const ButtonList = ({ selected, setSelected }) => {
  return (
    <div className="grid grid-cols-3">
      <Button selected={selected} setSelected={setSelected} content="users" />
      <Button selected={selected} setSelected={setSelected} content="posts" />
      <Button
        selected={selected}
        setSelected={setSelected}
        content="comments"
      />
    </div>
  );
};

export default ButtonList;
