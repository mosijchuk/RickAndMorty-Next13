'use client'
import React, {useEffect, useState} from 'react';
import {getCharacters} from "@features/Characters/characters.api";
import {CharactersResponseType, CharacterType} from "../../types/character.types";
import s from "@features/Characters/character-cards.module.scss";
import CharacterCard from "@entites/CharacterCard/CharacterCard";
import LoadingLocal from "@entites/LoadingLocal/LoadingLocal";
import CenterInfo from '@entites/CenterInfo/CenterInfo';
import Button from '@shared/Button/Button';

interface Props {
   pageId: string,
   charactersRes: CharactersResponseType
}
const CharacterCardsAll =  ({pageId, charactersRes}: Props) => {
   const [characters, setCharacters] = useState<CharacterType[]>([]);
   const [isFetching, setFetching] = useState<boolean>(false)
   const [pagesCount, setPagesCount] = useState<number>(0)
   const [pageNumber, setPageNumber] = useState<string>(pageId || '1')


   useEffect(() => {
      if(charactersRes) {
         setCharacters(charactersRes.results);
         setPagesCount(charactersRes.info.pages)
      }
   }, []);

   const loadMoreHandler = async () => {
      setFetching(true)
      const nextPage = (+pageNumber+1).toString()
      setPageNumber(nextPage)

      const res: CharactersResponseType = await getCharacters(nextPage);
      setFetching(false)
      setCharacters((prevCharacters) => [...prevCharacters, ...res.results]);
   };

   if(!characters.length) {
      return (<LoadingLocal />)
   }

   return (
      <>
         <div className={s.characterCardsWrapper}>
            {characters.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </div>
         {isFetching && (<LoadingLocal />)}
         {!isFetching && pagesCount > +pageNumber && (
            <CenterInfo>
               <Button
                  text='Load more'
                  callback={loadMoreHandler}
               />
            </CenterInfo>
         )}

      </>

   );
};

export default CharacterCardsAll;