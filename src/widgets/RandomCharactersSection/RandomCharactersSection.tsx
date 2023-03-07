import React from 'react';
import Section from "@shared/Section/Section";
import CharacterCardsRandom from "@features/Characters/CharacterCardsRandom";
import CenterInfo from "@entites/CenterInfo/CenterInfo";
import Link from "next/link";
import {ROUTES} from "@utils/constants";
import Button from "@shared/Button/Button";

interface Props {
   itemsCount: number
   name?: string
   description?: string
}

const RandomCharactersSection: React.FC<Props> = ({itemsCount= 9, name, description}) => {
   return (
      <Section header={
         {
            name,
            description
         }
      }>
         {/* @ts-expect-error Server Component */}
         <CharacterCardsRandom count={itemsCount}/>
         <CenterInfo>
            <Link href={`${ROUTES.CHARACTERS}`}>
               <Button text='See all'/>
            </Link>
         </CenterInfo>
      </Section>
   );
};

export default RandomCharactersSection;