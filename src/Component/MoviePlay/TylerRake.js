import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const TylerRake = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V95ZyU3QMic?si=BnVyrCRd3bJAILTX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Athena</h1>
        <br />
        <p>
          Tyler Rake est un mercenaire intrépide qui travaille dans l'ombre.
          Alors qu'il n'a plus rien à perdre, il est chargé par un puissant caïd
          mafieux, pour l'heure incarcéré, de sauver son fils qui a été enlevé
        </p>
      </div>
    </div>
  );
};
export default TylerRake;
