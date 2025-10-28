import React from "react";
import axios from "axios";

function App() {
  //using fetch
  // const getData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   console.log(data);
  // };

  // using Axios

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
  };

  return (
    <div>
      <button onClick={getData}>Ger Data</button>
    </div>
  );
}

export default App;
