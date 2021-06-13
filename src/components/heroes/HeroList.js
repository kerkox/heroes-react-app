import React from 'react'
import { getHeroesByPubliser } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPubliser(publisher);

  return (
    <ul>
      {
        heroes.map( hero => (
          <li key={hero.id}>
            { hero.superhero }
          </li>
        ))
      }      
    </ul>
  )
}
