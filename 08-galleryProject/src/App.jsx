import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=4&limit=20`
      );
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-6 text-[#14CF93]">
        Picsum Gallery
      </h1>

      {loading ? (
        <p className="text-gray-400 text-lg">Loading images...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 w-full max-w-6xl">
          {userdata.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
