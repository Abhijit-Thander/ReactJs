import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Notfound from "./pages/404page";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
