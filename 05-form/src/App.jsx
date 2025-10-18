import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");

  const handelForm = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log(first)
  };
  return (
    <div>
      <form onSubmit={handelForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
