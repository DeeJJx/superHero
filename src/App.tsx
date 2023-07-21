import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

type Hero = {
  id: number;
  name: string;
  images: {
    md: string;
  };
  biography: {
    aliases: [];
    alignment: string;
    alterEgos: string;
    firstAppearance: string;
    placeOfBirth: string;
    publisher: string;
  };
};

function App() {
  const [apiData, setApiData] = useState<Hero[]>();

  const fetchData = async () => {
    const url = "https://superhero-search.p.rapidapi.com/api/heroes";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d22f5adb1mshe7566df4c65a093p1679f0jsn3f34c5d1eac9",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button type="submit">Refresh</button>
      </form>
      <div className="page">
        <div className="hero-grid">
          {apiData?.map((hero) => (
            <Card key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
