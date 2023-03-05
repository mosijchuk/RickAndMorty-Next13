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

export async function getRandomCharacters(count: number = 9): Promise<Array<CharacterType>> {
  const characters: CharactersResponseType = await getCharacters();
  const itemsCount = characters.info.count
  const getRandomId = () => Math.floor(Math.random() * (itemsCount - 1 + 1)) + 1;
  const randomIds = []

  for (let i = 0; i < count; i++) {
    randomIds.push(getRandomId())
  }

  const res = await fetch(`https://rickandmortyapi.com/api/character/${randomIds.join()}`);
  return res.json();
}

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
