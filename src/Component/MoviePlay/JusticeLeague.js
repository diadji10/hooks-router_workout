import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const JusticeLeague = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cvUFoxU_Lq0?si=Tfk6VhPYKqmEjfXZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Justice League</h1>
        <br />
        <p>
          Dynamisé par sa foi rétablie dans l'humanité et inspiré par l'acte
          altruiste de Superman, Bruce Wayne demande l'aide de son nouvel
          alliée, Diana Prince, pour affronter un ennemi encore plus grand
        </p>
      </div>
    </div>
  );
};

export default JusticeLeague;
