import React from 'react';
import Section from "@shared/Section/Section";
import CharacterCardsRandom from "@features/Characters/CharacterCardsRandom";

const RandomCharactersSection = () => {
   const itemsCount = 9

   return (
      <Section header={
         {
            name: 'Random Characters',
            description: `${itemsCount} items`
         }
      }>
         {/* @ts-expect-error Server Component */}
         <CharacterCardsRandom count={itemsCount} />
      </Section>
   );
};

export default RandomCharactersSection;