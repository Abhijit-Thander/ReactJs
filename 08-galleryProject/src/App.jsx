import { useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=40"
    );
    setUserData(res.data);
  };

  return (
    <div className="bg-gray-900 h-screen p-4 text-white">
      <button
        onClick={getData}
        className="active:scale-95 px-4 bg-emerald-500 rounded py-2 font-semibold"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
