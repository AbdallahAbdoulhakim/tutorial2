import React from "react";

const Item = ({ item }) => {
  return (
    <li className="border border-green-200 p-2 rounded-lg bg-green-100">
      {item}
    </li>
  );
};

export default Item;
