import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const Athena = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I4Fr6xokozw?si=TcLScx3Nsq-ynuvh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Athena</h1>
        <br />
        <p>
          Le meurtre tragique d’un jeune garçon déclenche une guerre totale dans
          la communauté d’Athéna, avec les frères aînés de la victime au cœur du
          conflit.
        </p>
      </div>
    </div>
  );
};

export default Athena;
