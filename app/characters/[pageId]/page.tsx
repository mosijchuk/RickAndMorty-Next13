import React from 'react';
import CharactersPage from "../page";

interface Props {
   params: {
      pageId: string
}
}
const CharacterCurrentPage = ({params}: Props) => <CharactersPage params={params} />;


export default CharacterCurrentPage;