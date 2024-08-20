"use client";
import { useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";

type QuizOption = {
  description: ReactNode;
  isCorrect: boolean;
};

type Question = {
  text?: string;
  options: QuizOption[];
};

export default function QuizTemplate({
  title,
  questions,
  referral,
}: {
  title: string;
  questions: Question[];
  referral: string;
}) {
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  function Question({
    text,
    options,
  }: {
    text?: string;
    options: QuizOption[];
  }) {
    return (
      <div className="flex justify-center mt-36">
        <div className="window w-11/12">
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>{text}</p>
            {options.map(({ description, isCorrect }, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    alert(isCorrect ? "Helt rätt!" : "Fel!");
                    setPoints(points + (isCorrect ? 1 : 0));
                    setQuestionNumber(questionNumber + 1);
                  }}
                >
                  {description}
                </button>
              );
            })}
            <p>Rätta svar: {"🦞".repeat(points)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {questionNumber < questions.length ? (
        Question(questions[questionNumber])
      ) : (
        <>
          <p>Klar!</p>
          <a href={`/submit?id=${id}&game=${referral}&score=${points}`}>
            Gå tillbaka
          </a>
        </>
      )}
    </>
  );
}
