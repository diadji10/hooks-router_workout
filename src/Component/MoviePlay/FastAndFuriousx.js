import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
import { useNavigate } from "react-router-dom";

const FastAndFurious = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tOfqpdJGWL0?si=TqtY5TgR04o0rsqr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Fast and furious X</h1>
        <br />
        <p>
          Dom Toretto et sa famille sont pris pour cible par le fils vengeur du
          baron de la drogue Hernan Reyes.
        </p>
      </div>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>Retour
      </button>
    </div>
  );
};

export default FastAndFurious;
