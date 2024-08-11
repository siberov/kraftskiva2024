import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, score } = await req.json();

  if (!userId || !score) {
    return NextResponse.json(
      { error: "Supply user id and score" },
      { status: 500 }
    );
  }

  if (typeof score !== "number") {
    return NextResponse.json(
      { error: "Input must be a number" },
      { status: 500 }
    );
  }

  const db = await open({
    filename: "./mydatabase.sqlite",
    driver: sqlite3.Database,
  });

  await db.run(
    "CREATE TABLE IF NOT EXISTS score (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, score INTEGER)"
  );
  await db.run(
    "INSERT INTO score (user_id, score) VALUES (?, ?)",
    userId,
    score
  );

  await db.close();

  return NextResponse.json({ message: "Number inserted successfully" });
}

export async function GET(req: NextRequest) {
  const db = await open({
    filename: "./mydatabase.sqlite",
    driver: sqlite3.Database,
  });
  const row = await db.get("SELECT * FROM score");
  await db.close();
  if (row) {
    console.log("row", row);
    return NextResponse.json(row);
  }
  return NextResponse.json({}, { status: 500 });
}
