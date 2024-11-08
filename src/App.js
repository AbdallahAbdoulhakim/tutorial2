import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  const [selected, setSelected] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com";

  const queryItems = async () => {
    setItems([]);
    setErrorType("");
    setFetchError("");

    if (!selected) return;
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/${selected}`);
      if (!response.ok)
        throw new Error("Error 404 : The resource was not found!");

      const listItems = await response.json();
      if (listItems.length === 0) {
        setErrorType("warning");
        throw new Error("No Results were fetched!");
      }
      setItems(listItems);
    } catch (error) {
      if (!errorType) setErrorType("error");
      setFetchError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    queryItems();
  }, [selected]);

  return (
    <div className="container border border-slate-300 bg-slate-100 mx-auto min-h-screen font-roboto flex flex-col">
      <Header />
      <Content
        selected={selected}
        setSelected={setSelected}
        items={items}
        setItems={setItems}
        fetchError={fetchError}
        errorType={errorType}
        setErrorType={setErrorType}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
};

export default App;
