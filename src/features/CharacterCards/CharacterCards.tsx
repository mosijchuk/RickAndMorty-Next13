import React from "react";
import {
  CharactersResponseType,
  CharacterType,
} from "../../types/character.types";
import CharacterCard from "@entites/CharacterCard/CharacterCard";
import s from "./character-cards.module.scss";

export async function getCharacters(): Promise<CharactersResponseType> {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
}

const CharacterCards = async () => {
  const characters: CharactersResponseType = await getCharacters();

  return (
     <div className={s.characterCardsWrapper}>
        {characters.results.map((character) => (
           <CharacterCard key={character.id} character={character} />
        ))}
     </div>
  );
};

export default CharacterCards;
