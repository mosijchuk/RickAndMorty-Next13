import PageHead from "@components/layout/PageHead/PageHead";
import CharacterCard from "@components/CharacterCards/CharacterCard";
import CharacterCards from "@components/CharacterCards/CharacterCards";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page() {
  const test = await wait(1000);

  return (
    <div>
      <PageHead pageName={"The Rick And Morty"} description={""} />
          {/* @ts-expect-error Server Component */}
          <CharacterCards />
    </div>
  );
}
