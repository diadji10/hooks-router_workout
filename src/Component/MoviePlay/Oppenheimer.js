import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const Oppenheimer = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CoXtvSRpHgM?si=vBPwjLy4WaAcB2jp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Oppenheimer</h1>
        <br />
        <p>
          L'histoire du scientifique américain J. Robert Oppenheimer et son rôle
          dans le développement de la bombe atomique
        </p>
      </div>
    </div>
  );
};

export default Oppenheimer;
