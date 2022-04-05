import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import "./scss/main.scss";

const App = () => {
  const [input, setInput] = useState("");
  const [ipData, setIpData] = useState([]);
  const [url, setUrl] = useState("");

  const handleClick = () => {
    const res = input;
    setUrl(res);
  };

  const API_KEY = `https://geo.ipify.org/api/v2/country?apiKey=at_cZE4uI1EdEKez7BfWmN8Qv0kzJciL&ipAddress=${url}`;

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInput(newValue);
  };

  const fetchIp = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIp(API_KEY);
  }, [url]);

  return (
    <section className="app-container">
      <Header
        ipData={ipData}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <Map />
    </section>
  );
};

export default App;
