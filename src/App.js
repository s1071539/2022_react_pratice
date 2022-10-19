import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

import "./styles/style.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
