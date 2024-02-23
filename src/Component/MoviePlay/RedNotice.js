import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
import { useNavigate } from "react-router-dom";

const RedNotice = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xrtrnLbWTZ8?si=JA9hJmYic-G8ooeJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Red Notice</h1>
        <br />
        <p>
          Un agent d’Interpol parvient à traquer le voleur d’œuvres d’art le
          plus recherché au monde avec l’aide d’un voleur rival. Mais rien n’est
          ce qu’il semble alors qu’une série de doubles croisements s’ensuit
        </p>
      </div>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>Retour
      </button>
    </div>
  );
};

export default RedNotice;
