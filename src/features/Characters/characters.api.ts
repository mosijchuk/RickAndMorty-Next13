import {CharactersResponseType, CharacterType} from "../../types/character.types";

export async function getCharacters(pageId: string = '1'): Promise<CharactersResponseType> {
   const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageId}`);
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