import React, { useMemo } from "react";
import { getHeroesByPubliser } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  
  const heroes = useMemo(() => getHeroesByPubliser(publisher), [publisher]);
  // const heroes = getHeroesByPubliser(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
