import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="app">
      <Card title="Hello" des="This is a description." />
      <Card title="world!!" des="my name is abhi" />
    </div>
  );
};

export default App;
