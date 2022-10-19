import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
