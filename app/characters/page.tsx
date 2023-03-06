import React from 'react';
import PageHead from "@widgets/PageHead/PageHead";
import AllCharactersSection from "@widgets/AllCharactersSection/AllCharactersSection";

interface Props {
   params: {
      pageId: string
   }
}

const CharactersPage = ({ params }:Props) => {
   const { pageId } = params

   return (
      <>
         <PageHead pageName={"Characters"} description={""} />
         <AllCharactersSection pageId={pageId} />
      </>
   );
};

export default CharactersPage;