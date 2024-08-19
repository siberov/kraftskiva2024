"use client";
import QuizTemplate from "../quiztemplate";

export default function MusicQuiz() {
  const questions = [
    {
      text: "Vilken låt är äldst?",
      options: [
        { description: "Alternativ 1", isCorrect: true },
        { description: "Alternativ 2", isCorrect: false },
        { description: "Alternativ 3", isCorrect: false },
      ],
    },
    {
      text: "Vilken låt är äldst?",
      options: [
        { description: "Alternativ 1", isCorrect: false },
        { description: "Alternativ 2", isCorrect: true },
        { description: "Alternativ 3", isCorrect: false },
      ],
    },
    {
      text: "Vilken låt är äldst?",
      options: [
        { description: "Alternativ 1", isCorrect: true },
        { description: "Alternativ 2", isCorrect: false },
        { description: "Alternativ 3", isCorrect: false },
      ],
    },
    {
      text: "Vilken låt är äldst?",
      options: [
        { description: "Alternativ 1", isCorrect: false },
        { description: "Alternativ 2", isCorrect: false },
        { description: "Alternativ 3", isCorrect: true },
      ],
    },
    {
      text: "Vilken låt är äldst?",
      options: [
        { description: "Alternativ 1", isCorrect: true },
        { description: "Alternativ 2", isCorrect: false },
        { description: "Alternativ 3", isCorrect: false },
      ],
    },
  ];

  return (
    <>
      <span className="fixed inset-0 w-screen h-screen bg-repeat bg-[url('/water2.webp')] pointer-events-none -z-50" />
      <QuizTemplate
        title="Musizquiz"
        questions={questions}
        referral="musikquiz"
      />
    </>
  );
}
