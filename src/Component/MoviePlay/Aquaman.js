import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
import { useNavigate } from "react-router-dom";
const Aquaman = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ivvOKs7B-Vw?si=0ABwYwB2TCTrmFMK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Aquaman</h1>
        <br />
        <p>
          Arthur Curry, l’héritier du royaume sous-marin de l’Atlantide, se
          lance dans une quête pour empêcher une guerre entre les mondes de
          l’océan et de la terre
        </p>
      </div>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>Retour
      </button>
    </div>
  );
};

export default Aquaman;
