import PageHead from "@widgets/PageHead/PageHead";
import RandomCharactersSection from "@widgets/RandomCharactersSection/RandomCharactersSection";
import Header from "@widgets/Header/Header";
import Footer from "@widgets/Footer/Footer";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
   const test = await wait(1000);
   const itemsCount = 9
   return (
      <>
         <Header />
         <PageHead pageName={"The Rick And Morty"} description={""}/>
         <RandomCharactersSection
            itemsCount={itemsCount}
            name={`Random characters`}
            description={`${itemsCount} random items`}
         />
         <Footer />
      </>
   );
}
