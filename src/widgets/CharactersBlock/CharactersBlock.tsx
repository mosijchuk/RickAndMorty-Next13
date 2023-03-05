import React from 'react';
import Section from "@shared/Section/Section";
import CharacterCards from "@features/CharacterCards/CharacterCards";

const CharactersBlock = () => {
   return (
      <Section name={
         {
            header: 'Random Characters',
            description: '20 items'
         }
      }>
         {/* @ts-expect-error Server Component */}
         <CharacterCards />
      </Section>
   );
};

export default CharactersBlock;