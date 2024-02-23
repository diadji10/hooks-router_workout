import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
import { useNavigate } from "react-router-dom";

const Titanic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Quf4qIkD3KY?si=dLppl0e3iZ49sE4C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Titanic</h1>
        <br />
        <p>
          Une aristocrate de dix-sept ans tombe amoureuse d’un artiste gentil
          mais pauvre à bord du luxueux et infortuné R.M.S
        </p>
      </div>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>Retour
      </button>
    </div>
  );
};
export default Titanic;
