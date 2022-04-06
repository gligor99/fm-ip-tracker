import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MapComponent from "./components/Map";
import "./scss/main.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [ipData, setIpData] = useState([]);

  const API_KEY = `https://geo.ipify.org/api/v2/country,city?apiKey=at_LVknfdC9IIzFHdASBG6nkeHU59zhI&ipAddress=${url}`;

  const handleClick = () => {
    setUrl(input);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(API_KEY)
      .then((response) => {
        setIpData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <section className="app-container">
      <Header
        loading={loading}
        ipData={ipData}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <MapComponent loading={loading} ipData={ipData} />
    </section>
  );
};

export default App;
