"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ids } from "../util";
import { useState } from "react";

export default function FindHat() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  if (!id) {
    throw Error("Something went wrong with your ID.");
    alert("Something went wrong with your ID.");
  }

  const answers: Record<string, string> = {
    "6431": "foo", // "Sara",
    "5072": "bar", // "Arvid",
    "2875": "scentechno", // "Fabian",
    "5278": "doubledad", // "Pu",
    "3202": "multimom", // "Mimmi",
    "2162": "fitbro3000", // "Fred",
    "8202": "jr frontend", // "Martin",
    "2342": "bratz?", // "Anna",
    "3527": "mufasa", // "Rasmus",
  };

  function checkAnswer(e: Event) {
    e.preventDefault();
    if (answer == answers[id]) {
      alert("Helt rätt!");
      router.push(`/submit?id=${id}&game=hat&score=1`);
    } else {
      alert("Fel svar!");
    }
  }

  return (
    <>
      <span className="fixed inset-0 w-screen h-screen bg-repeat bg-[url('/red.gif')] pointer-events-none -z-50" />
      <p className="m-4 mt-8 text-slate-200">Hitta hatt, {ids[id ?? ""]}</p>
      <Image
        src={`/${ids[(id ?? "").toLowerCase()]}clue.png`}
        alt="En ledtråd"
        width={500}
        height={500}
      ></Image>
      <p className="m-4  text-slate-200">
        Skriv ordet som står inuti hatten i rutan:
      </p>
      {/*@ts-ignore*/}
      <form onSubmit={checkAnswer}>
        <input
          className="m-4"
          type="text"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          className="text-purple-200 outline-dashed w-16 drop-shadow-2xl"
          type="submit"
        >
          KÖR!
        </button>
      </form>
    </>
  );
}
