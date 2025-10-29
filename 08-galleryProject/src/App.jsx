import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=16`
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
  }, [index]);

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

          <div className="gap-8 flex mt-2 mb-4 justify-center items-center col-span-full">
            <button
              className="bg-yellow-600 px-2 py-1.5 rounded-md cursor-pointer active:scale-95"
              onClick={() => {
                if (index > 1) {
                  setIndex(index - 1);
                }
              }}
            >
              Previous
            </button>
            <h4>Page {index}</h4>
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-green-600 px-2 py-1.5 rounded-md cursor-pointer active:scale-95"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
