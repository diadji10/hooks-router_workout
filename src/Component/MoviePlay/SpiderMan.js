import React from "react";
import Header from "../Header/Header";
import "./MoviePlay.css";
const SpiderMan = () => {
  return (
    <div>
      <Header />
      <div className="card-play">
        <div className="view">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7w_w10HVa54?si=Qqh9vBIxeMYhXYm-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1>Spider Man</h1>
        <br />

        <p>
          Miles Morales se catapulte à travers le multivers, où il rencontre une
          équipe de Spider-People chargée de protéger son existence même
        </p>
      </div>
    </div>
  );
};

export default SpiderMan;
