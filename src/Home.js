import React, { useState } from "react";
import Header from "./Component/Header/Header";
import "./Home.css";
import Filter from "./Component/filter/Filter";
import MovieCard from "./Component/MovieCard/MovieCard";
import Movielist from "./Component/MovieList/MovieList";
import { Link } from "react-router-dom";

const Home = () => {
  const [filtered, setFiltered] = useState([...Movielist]);
  const handleFilter = ({ title, note }) => {
    const filteredValue = Movielist.filter(
      (list) =>
        list.titre.toLowerCase().includes(title.toLowerCase()) &&
        (!note || list.note == note)
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
          <Link
            to={`/movies/${card.titre.toLocaleLowerCase().split(" ").join("")}`}
          >
            <MovieCard
              titre={card.titre}
              image={card.posterUrl}
              description={card.description}
              note={card.note}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
