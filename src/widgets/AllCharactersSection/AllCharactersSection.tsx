import React from 'react';
import Section from "@shared/Section/Section";
import CharacterCardsAll from "@features/Characters/CharacterCardsAll";

interface Props {
   pageId: string
}

const AllCharactersSection = ({pageId}: Props) => {
   return (
      <Section header={
         {
            name: 'All Characters',
         }
      }>
         <CharacterCardsAll pageId={pageId} />
      </Section>
   );
};

export default AllCharactersSection;