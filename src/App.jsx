import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import "./scss/main.scss";

const App = () => {
  return (
    <section className="app-container">
      <Header />
      <Map />
    </section>
  );
};

export default App;
