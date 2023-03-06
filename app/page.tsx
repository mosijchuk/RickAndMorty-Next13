import PageHead from "@widgets/PageHead/PageHead";
import RandomCharactersSection from "@widgets/RandomCharactersSection/RandomCharactersSection";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
   const test = await wait(1000);

   return (
      <div>
         <PageHead pageName={"The Rick And Morty"} description={""}/>
         <RandomCharactersSection/>
      </div>
   );
}
