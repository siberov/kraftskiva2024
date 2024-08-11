"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";
import { ids } from "./util";

const urls = {
  quiz: "/d791568a-08a8-4ef0-b125-bed4124f81c0",
  musicQuiz: "/2cd7b76d-b410-4173-92ca-1e70de5bb21a",
  reactionTest: "/f147f242-5760-48b5-ae8d-fc4eab640537",
  findHat: "/a606d0c4-6146-406a-98bb-53a98ee7b124",
};

export default function MainMenu() {
  const [input, setInput] = useState("");
  const [wrongInput, setWrongInput] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  console.log("Id is ", id);

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
      default:
        setWrongInput(true);
        break;
    }
  }

  function renderAdminPanel(id: string) {
    if (ids[id] !== "Arvid") {
      return <></>;
    }
    return (
      <>
        <a href="/d7b1a390-0ee3-4681-90bc-0217f73f1eee">init db</a>
      </>
    );
  }

  return (
    <>
      {id && Object.keys(ids).find((e) => e === id) ? (
        <>
          {renderAdminPanel(id)}
          <h1>Kräftskiva</h1>
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
            <button>the button</button>
          </form>
          {wrongInput ? <p>Fel! Kontrollera att du stavat rätt.</p> : <></>}
        </>
      ) : (
        <> Du måste skanna QR-koden </>
      )}
    </>
  );
}
