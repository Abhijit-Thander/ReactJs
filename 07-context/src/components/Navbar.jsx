import Nav2 from "./Nav2";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className={`nav ${theme}`}>
      <h1>Shreyans</h1>
      <Nav2 />
    </div>
  );
};

export default Navbar;
