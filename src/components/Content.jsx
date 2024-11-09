import React from "react";
import ButtonList from "./ButtonList";
import Error from "./Error";
import Spinner from "../assets/tail-spin.svg";
import { ItemList } from "./ItemList";

const Content = ({
  selected,
  setSelected,
  fetchError,
  errorType,
  isLoading,
  items,
}) => {
  return (
    <div className="flex-grow mt-5 p-5 flex flex-col space-y-6">
      <ButtonList selected={selected} setSelected={setSelected} />
      {fetchError && <Error message={fetchError} errorType={errorType} />}
      {isLoading && (
        <img style={{ height: "50px" }} src={Spinner} alt="Loading..." />
      )}
      {items.length > 0 && <ItemList items={items} />}
    </div>
  );
};

export default Content;
