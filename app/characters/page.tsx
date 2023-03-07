import React from 'react';
import PageHead from "@widgets/PageHead/PageHead";
import AllCharactersSection from "@widgets/AllCharactersSection/AllCharactersSection";
import Header from "@widgets/Header/Header";
import Footer from "@widgets/Footer/Footer";

interface Props {
   params: {
      pageId: string
   }
}

const CharactersPage = ({ params }:Props) => {
   const { pageId } = params

   return (
      <>
         <Header />
         <PageHead pageName={"Characters"} description={""} />
         <AllCharactersSection pageId={pageId} />
         <Footer />
      </>
   );
};

export default CharactersPage;