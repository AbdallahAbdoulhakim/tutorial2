import React from "react";
import Item from "./Item";

export const ItemList = ({ items }) => {
  const itemsKeys = Object.keys(items[0]);

  return (
    <div className="overflow-auto">
      <table className="space-y-4 border border-slate-500 w-100">
        <thead>
          <tr className="bg-green-500">
            {itemsKeys.map((ik, k) => {
              return (
                <th key={`item-${k + 2}`} className="border-r border-slate-400">
                  {ik}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => {
            return <Item key={key} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
