import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MapComponent from "./components/Map";
import "./scss/main.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [ipData, setIpData] = useState([]);

  const API_KEY = `https://geo.ipify.org/api/v2/country?apiKey=at_cZE4uI1EdEKez7BfWmN8Qv0kzJciL&ipAddress=${url}`;

  const handleClick = () => {
    setUrl(input);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const fetchIp = async (url) => {
    try {
      setLoading(false);
      const response = await fetch(url);
      const data = await response.json();
      setIpData(data);
      setLoading(true);
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
        loading={loading}
        ipData={ipData}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <MapComponent />
    </section>
  );
};

export default App;
