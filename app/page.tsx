import PageHead from "@widgets/PageHead/PageHead";
import CharactersSection from "@widgets/CharactersSection/CharactersSection";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
  const test = await wait(1000);

  return (
    <div>
      <PageHead pageName={"The Rick And Morty"} description={""} />
          <CharactersSection />
    </div>
  );
}
