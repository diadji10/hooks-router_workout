import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
import { useNavigate } from "react-router-dom";

const Wonka = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yPmOnBX_7Ww?si=Qmqx63L-3YaQAMoM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Wonka</h1>
        <br />
        <p>
          Alors qu’il rêve d’ouvrir une boutique dans une ville réputée pour son
          chocolat, Willy Wonka, jeune et pauvre, découvre que l’industrie est
          dirigée par un cartel de chocolatiers cupides
        </p>
      </div>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>Retour
      </button>
    </div>
  );
};

export default Wonka;
