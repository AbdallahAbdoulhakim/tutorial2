import React from "react";

const Item = ({ item }) => {
  const objArr = Object.values(item);

  return (
    <tr className="odd:bg-green-200 even:bg-green-500">
      {objArr.map((objElt) => {
        return <td>{JSON.stringify(objElt)}</td>;
      })}
    </tr>
  );
};

export default Item;
