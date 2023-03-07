import React, {useEffect} from 'react';
import Section from "@shared/Section/Section";
import CharacterCardsAll from "@features/Characters/CharacterCardsAll";
import {CharactersResponseType} from "../../types/character.types";
import {getCharacters} from "@features/Characters/characters.api";

interface Props {
   pageId: string
}

const AllCharactersSection = async ({pageId}: Props) => {
   const charactersRes: CharactersResponseType = await getCharacters(pageId);

   return (
      <Section header={
         {
            name: 'All Characters',
            description: `A total of ${charactersRes.info.count} characters`
         }
      }>
         <CharacterCardsAll
            pageId={pageId}
            charactersRes={charactersRes}
         />
      </Section>
   );
};

export default AllCharactersSection;