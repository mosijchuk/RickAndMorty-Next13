import React from 'react';
import PageHead from "@widgets/PageHead/PageHead";
import RandomCharactersSection from "@widgets/RandomCharactersSection/RandomCharactersSection";
import {getCharacter} from "@features/Characters/characters.api";
import Header from "@widgets/Header/Header";
import Footer from "@widgets/Footer/Footer";


interface Props {
   params: {
      characterId: string
   }
}

const CharacterPage = async ({params}: Props) => {
   const {characterId} = params;
   const {
      name,
      species,
      gender,
      status,
      origin: {name: originName},
      image
   } = await getCharacter(characterId);
   const description =
      `${species}, ${gender} / ${status} / ${originName}`
   const randomItemsCount = 6

   return (
      <>
         <Header />
         <PageHead pageName={name} description={description} imageLink={image}/>
         <RandomCharactersSection
            itemsCount={randomItemsCount}
            name={`Other characters`}
         />
         <Footer />
      </>
   )
      ;
};

export default CharacterPage;