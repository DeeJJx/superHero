import React, { useState } from "react";
import Card from "./Card";

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

export default function Search() {
  const [apiData, setApiData] = useState<Hero | null>();
  const [heroName, setHeroName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    /*MAX LIMIT 5 SEARCHES ACCORDING TO API :(*/
    const url = `https://superhero-search.p.rapidapi.com/api/?hero=${heroName}`;
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

  return (
    <div className="page hero-search">
      <form className="hero-search-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Search For A Hero! MAX LIMIT 5 SEARCHES"
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            className="hero-search-input"></input>
        <button className="hero-search-button">Search</button>
      </form>
      <div>
      {apiData && <Card hero={apiData} />}
      </div>
    </div>
  );
}
