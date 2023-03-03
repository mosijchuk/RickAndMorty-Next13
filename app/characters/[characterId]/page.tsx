import React from 'react';


async function getCharacter(id: string) {
   const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
   return res.json();
}

interface Props {
   params: {
      characterId: string
   }
}

 const CharacterPage = async ({ params }:Props) => {
    const { characterId } = params;

    console.log(params)
   const character = await getCharacter(characterId);
   return (
      <section>
         <h1 className="font-bold underline">{character.name}</h1>
      </section>
   );
};

export default CharacterPage;