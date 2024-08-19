import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function Init() {
  const db = await open({
    filename: "./mydatabase.sqlite",
    driver: sqlite3.Database,
  });

  //   await db.run(
  //     "CREATE TABLE IF NOT EXISTS score (id INTEGER PRIMARY KEY AUTOINCREMENT, game TEXT, user_id TEXT, score INTEGER)"
  //   );
  await db.close();
  return <p>done</p>;
}
