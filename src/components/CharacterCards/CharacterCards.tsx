import React from "react";
import {
  CharactersResponseType,
  CharacterType,
} from "../../types/character.types";
import CharacterCard from "@components/CharacterCards/CharacterCard";
import s from "./character-card.module.scss";

export async function getCharacters(): Promise<CharactersResponseType> {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
}

const CharacterCards = async () => {
  const characters: CharactersResponseType = await getCharacters();

  return (
     <section id={s.characters}>
     <div className="container">
       <div className={s.characterCardsWrapper}>
         {characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
         ))}
       </div>
     </div>
     </section>
  );
};

export default CharacterCards;
