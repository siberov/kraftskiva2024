import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { redirect } from "next/navigation";

export default async function Init({
  searchParams,
}: {
  searchParams?: { id?: string; game?: string; score?: number };
}) {
  if (!searchParams) {
    return;
  }
  const id = searchParams?.id;
  const game = searchParams?.game;
  const score = searchParams?.score;

  const db = await open({
    filename: "./mydatabase.sqlite",
    driver: sqlite3.Database,
  });

  const row = await db.get(
    "SELECT score FROM score WHERE game = ? AND user_id = ?",
    game,
    id
  );
  if (row) {
    await db.close();
    return (
      <>
        <p>
          Du har redan fått {row.score} poäng i {game}. Det här kommer inte
          räknas.
        </p>
        <p>
          Klicka <a href={`/?id=${id}`}>här</a> för att komma hem.
        </p>
      </>
    );
  } else {
    console.log("giving points", game, id, score);
    await db.run(
      "INSERT INTO score (game, user_id, score) VALUES (?, ?, ?)",
      game,
      id,
      score
    );
    await db.close();
    redirect(`/?id=${id}`);
  }
}
