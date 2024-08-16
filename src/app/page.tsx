"use server";
import MainMenu from "./mainmenu";
import ScoreBoard from "./scoreboard";

export default async function Home() {
  return (
    <>
      <span className="fixed inset-0 w-screen h-screen bg-repeat bg-[url('/water2.webp')] pointer-events-none -z-50" />
      <div className="flex flex-col p-8">
        <MainMenu />
        <ScoreBoard />
      </div>
    </>
  );
}
