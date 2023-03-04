import React from 'react';
import Section from "@shared/Section/Section";
import CharacterCards from "@features/CharacterCards/CharacterCards";

const CharactersSection = () => {
   return (
      <Section>
      {/* @ts-expect-error Server Component */}
         <CharacterCards />
      </Section>
   );
};

export default CharactersSection;