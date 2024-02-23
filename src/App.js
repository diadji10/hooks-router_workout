import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aquaman from "./Component/MoviePlay/Aquaman";
import Athena from "./Component/MoviePlay/Athena";
import BlackPanther from "./Component/MoviePlay/BlackPanther";
import Creed from "./Component/MoviePlay/Creed";
import FastAndFurious from "./Component/MoviePlay/FastAndFuriousx";
import JusticeLeague from "./Component/MoviePlay/JusticeLeague";
import Oppenheimer from "./Component/MoviePlay/Oppenheimer";
import RedNotice from "./Component/MoviePlay/RedNotice";
import SpiderMan from "./Component/MoviePlay/SpiderMan";
import Titanic from "./Component/MoviePlay/Titanic";
import TylerRake from "./Component/MoviePlay/TylerRake";
import Wonka from "./Component/MoviePlay/Wonka";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/aquaman" element={<Aquaman />} />
        <Route path="/movies/athena" element={<Athena />} />
        <Route path="/movies/blackpanther" element={<BlackPanther />} />
        <Route path="/movies/creed" element={<Creed />} />
        <Route path="/movies/fastandfuriousx" element={<FastAndFurious />} />
        <Route path="/movies/justiceleague" element={<JusticeLeague />} />
        <Route path="/movies/oppenheimer" element={<Oppenheimer />} />
        <Route path="/movies/rednotice" element={<RedNotice />} />
        <Route path="/movies/spiderman" element={<SpiderMan />} />
        <Route path="/movies/titanic" element={<Titanic />} />
        <Route path="/movies/tylerrake" element={<TylerRake />} />
        <Route path="/movies/wonka" element={<Wonka />} />
      </Routes>
    </div>
  );
};

export default App;
