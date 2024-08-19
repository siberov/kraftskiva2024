"use client";
import { useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";

type QuizOption = {
  description: ReactNode;
  isCorrect: boolean;
};

export default function MusicQuiz() {
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  function Question({
    text,
    options,
  }: {
    text: string;
    options: QuizOption[];
  }) {
    return (
      <>
        <p>{text}</p>
        {options.map(({ description, isCorrect }, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setPoints(points + (isCorrect ? 1 : 0));
                setQuestionNumber(questionNumber + 1);
              }}
            >
              {description}
            </button>
          );
        })}
      </>
    );
  }

  const questions = [
    <Question
      text="vem är kung i kurrekurreduttön?"
      options={[
        {
          description: (
            <img src="data:image/png;base64,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" />
          ),
          isCorrect: true,
        },
        { description: "greger", isCorrect: false },
        { description: "krister", isCorrect: false },
      ]}
    />,
    <Question
      text="vem är pippis pappa?"
      options={[
        { description: "stefan", isCorrect: true },
        { description: "greger", isCorrect: false },
        { description: "krister", isCorrect: false },
        { description: "stefan", isCorrect: true },
        { description: "greger", isCorrect: false },
        { description: "krister", isCorrect: false },
      ]}
    />,
  ];

  return (
    <>
      <h1>Musikquiz</h1>
      <p>Rätta svar: {points}</p>
      {questionNumber < questions.length ? (
        questions[questionNumber]
      ) : (
        <>
          <p>Klar!</p>
          <a href={`/submit?id=${id}&game=musikquiz&score=${points}`}>
            Gå tillbaka
          </a>
        </>
      )}
    </>
  );
}
