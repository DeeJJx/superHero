import React from "react";
import { useState } from "react";

type Hero = {
  id: number;
  name: string;
  images: {
    md: string;
  };
  biography: {
    aliases: [];
    alignment: string,
    alterEgos: string,
    firstAppearance: string,
    placeOfBirth: string,
    publisher: string
  }
};

type CardProps = {
  hero: Hero;
};

const Card: React.FC<CardProps> = ({ hero }) => {

    const [showBio, setShowBio] = useState(false);

    const toggleBio = () => {
      setShowBio(!showBio);
    };

  return (
    <div className={`hero-card ${showBio ? 'expanded' : ''}`}>
      <img src={hero.images.md} alt={hero.name} className="hero-image" />
      <p>{hero.name}</p>
      <button onClick={toggleBio}>
        {showBio ? 'Hide Biography' : 'Show Biography'}
      </button>
      {showBio && (
        <div className="biography">
          <p>Aliases: {hero.biography.aliases.join(', ')}</p>
          <p>Alignment: {hero.biography.alignment}</p>
          <p>Alter Egos: {hero.biography.alterEgos}</p>
          <p>First Appearance: {hero.biography.firstAppearance}</p>
          <p>Place of Birth: {hero.biography.placeOfBirth}</p>
          <p>Publisher: {hero.biography.publisher}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
