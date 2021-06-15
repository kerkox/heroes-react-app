import React, { useState } from "react";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {
  const [heroesFiltered, setHeroesFiltered] = useState(heroes);

  const [{ searchText }, handleInputChange, reset] = useForm({ searchText: "" });
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`)
  };

  return (
    <div>
      <h1>Search SCreen</h1>

      <div className="row">
        <div className="col-5">
          <h4>Search Form </h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              name="search"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control"
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
