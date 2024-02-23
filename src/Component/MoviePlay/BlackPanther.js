import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const BlackPanther = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/noTuWxGmYlw?si=p_B_yM4VTgXMbf6E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Black Panther</h1>
        <p>
          T’Challa, héritier du royaume caché mais avancé du Wakanda, doit
          s’avancer pour mener son peuple vers un nouvel avenir et doit faire
          face à un challenger du passé de son pays.
        </p>
      </div>
    </div>
  );
};

export default BlackPanther;
