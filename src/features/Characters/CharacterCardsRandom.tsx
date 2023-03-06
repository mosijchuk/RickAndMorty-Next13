import React from "react";
import {
  CharactersResponseType,
  CharacterType,
} from "../../types/character.types";
import CharacterCard from "@entites/CharacterCard/CharacterCard";
import s from "./character-cards.module.scss";
import {getRandomCharacters} from "@features/Characters/characters.api";


interface CharacterCardsRandomProps {
  count?: number
}

const CharacterCardsRandom = async ({count = 9}: CharacterCardsRandomProps) => {
  const characters: Array<CharacterType> = await getRandomCharacters(count);

  return (
     <div className={s.characterCardsWrapper}>
        {characters.map((character) => (
           <CharacterCard key={character.id} character={character} />
        ))}
     </div>
  );
};

export default CharacterCardsRandom;
