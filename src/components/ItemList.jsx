import React from "react";
import Item from "./Item";

export const ItemList = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item, key) => {
        return <Item key={key} item={JSON.stringify(item)} />;
      })}
    </ul>
  );
};
