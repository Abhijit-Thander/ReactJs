import Navbar from "./components/Navbar";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { setTheme } = useTheme();

  const ChangeTheme = () => {
   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Navbar />
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  );
}

export default App;
