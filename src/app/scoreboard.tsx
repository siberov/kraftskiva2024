import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { ids } from "./util";

export default async function ScoreBoard() {
  const db = await open({
    filename: "./mydatabase.sqlite",
    driver: sqlite3.Database,
  });
  await db.run(
    "CREATE TABLE IF NOT EXISTS score (id INTEGER PRIMARY KEY AUTOINCREMENT, game TEXT, user_id TEXT, score INTEGER)"
  );
  const rows = await db.all(
    "SELECT user_id, SUM(score) as score FROM score GROUP BY game, user_id"
  );

  const scores = Object.keys(ids).map((id) => ({ userId: id, score: 0 }));

  rows.forEach((row) => {
    const score = scores.find((score) => score.userId === row.user_id);
    if (score) {
      score.score = row.score;
    } else {
      console.log(`Got score with wrong user id: ${row.user_id}`);
    }
  });

  scores.sort((s1, s2) => s2.score - s1.score);

  return (
    <>
      <h2>Resultat</h2>
      <table>
        <thead>
          <tr>
            <td>Spelare</td>
            <td>Poäng</td>
          </tr>
        </thead>
        <tbody>
          {scores.map((row) => (
            <tr key={row.userId} className="border-">
              <td>{ids[row.userId] ?? "UNKNOWN USER"}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
