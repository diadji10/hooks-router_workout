import React from "react";
import "./MovieCard.css";

const MovieCard = ({ image, titre, description, note }) => {
  return (
    <div className="MovieCard">
      <div className="image">
        <img src={image} />
      </div>
      <div className="text">
        <h2>{titre}</h2>
        <p>{description}</p>
        <span className="note">note : </span>
      </div>
    </div>
  );
};

export default MovieCard;
