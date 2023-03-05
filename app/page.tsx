import PageHead from "@widgets/PageHead/PageHead";
import CharactersBlock from "@widgets/CharactersBlock/CharactersBlock";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
  const test = await wait(1000);

  return (
    <div>
      <PageHead pageName={"The Rick And Morty"} description={""} />
          <CharactersBlock />
    </div>
  );
}
