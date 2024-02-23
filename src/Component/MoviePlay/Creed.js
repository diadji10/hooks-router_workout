import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const Creed = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SdFuAA5l7Ms?si=32ChVQyXPtFu_9sH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>CREED</h1>
        <br />
        <p>
          Rocky Balboa, l'ancien champion du monde de poids lourds, devient
          l'entraîneur et le mentor d'Adonis Johnson, le fils de son ami et
          ancien rival maintenant décédé Apollo
          Creedsrc/Component/MoviePlay/MoviePlay-creed.js
        </p>
      </div>
    </div>
  );
};

export default Creed;
