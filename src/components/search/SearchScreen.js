import React, { useMemo, useState } from "react";
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({history}) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)

  
  const [{ searchText }, handleInputChange] = useForm({ searchText: q });
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`)
  };
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  
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
              name="searchText"
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
          {
            (q === '') 
            &&
            <div className="alert alert-info">
              Search a hero
            </div>
          }
          {
            (q !== '' && heroesFiltered.length === 0) 
            &&
            <div className="alert alert-danger">
              There is no a hero with { q }
            </div>
          }

          {
            heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
