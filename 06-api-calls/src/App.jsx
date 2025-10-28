import React from "react";

function App() {
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <button onClick={getData}>Ger Data</button>
    </div>
  );
}

export default App;
