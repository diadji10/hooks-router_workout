import React, { useState } from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import Filter from "./Component/filter/Filter";
import MovieCard from "./Component/MovieCard/MovieCard";
import Movielist from "./Component/MovieList/MovieList";

const App = () => {
  const [filtered, setFiltered] = useState([...Movielist]);
  const handleFilter = ({ title, note }) => {
    const filteredValue = Movielist.filter(
      (list) =>
        list.titre.toLowerCase().includes(title.toLowerCase()) &&
        (!note || list.note >= note)
    );
    setFiltered(filteredValue);
  };
  return (
    <div className="app">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>OUR MOVIES</h1>
      <Filter onFilter={handleFilter} />
      <hr />
      <div className="container">
        {filtered.map((card) => (
          <MovieCard
            titre={card.titre}
            image={card.posterUrl}
            description={card.description}
            note={card.note}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
