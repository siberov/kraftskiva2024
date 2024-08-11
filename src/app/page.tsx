"use server";
import MainMenu from "./mainmenu";
import ScoreBoard from "./scoreboard";

export default async function Home() {
  return (
    <>
      <MainMenu />
      <ScoreBoard />
    </>
  );
}
