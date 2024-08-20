"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";
import { ids } from "./util";

const urls = {
  quiz: "/quiz-431",
  quiz2: "/quiz-134",
  musicQuiz: "/music-744",
  reactionTest: "/reaction-198",
  findHat: "/hat-610",
};

export default function MainMenu() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  function processInput(input: string) {
    const normalized = input.trim().toLowerCase();
    switch (normalized) {
      case "kräftsmör":
        router.push(urls.quiz + `?id=${id}`);
        break;
      case "lejon":
        router.push(urls.musicQuiz + `?id=${id}`);
        break;
      case "enbär":
        router.push(urls.reactionTest + `?id=${id}`);
        break;
      case "paris":
        router.push(urls.findHat + `?id=${id}`);
        break;
      case "drake":
        router.push(urls.quiz2 + `?id=${id}`);
        break;
      default:
        alert("Fel! Kontrollera stavningen.");
        break;
    }
  }

  function renderAdminPanel(id: string) {
    if (ids[id] !== "Arvid") {
      return <></>;
    }
    return (
      <>
        <a href="/db-init">init db</a>
      </>
    );
  }

  return (
    <>
      {id && Object.keys(ids).find((e) => e === id) ? (
        <>
          {renderAdminPanel(id)}
          <h1 className="text-4xl mb-4 font-bold text-orange-600">
            KrÃ⁠¶ftskiva
          </h1>
          <p>Välkommen, {ids[id]} </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              processInput(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button>Ok</button>
          </form>
        </>
      ) : (
        <> Du måste skanna QR-koden </>
      )}
    </>
  );
}
