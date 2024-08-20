"use client";
import QuizTemplate from "../quiztemplate";

export default function Quiz1() {
  const questions = [
    {
      options: [
        { description: "1884", isCorrect: false },
        { description: "1896", isCorrect: true },
        { description: "1912", isCorrect: false },
      ],
    },
    {
      options: [
        { description: "1900", isCorrect: true },
        { description: "1936", isCorrect: false },
        { description: "1954", isCorrect: false },
      ],
    },
    {
      options: [
        { description: "USA", isCorrect: false },
        { description: "Frankrike", isCorrect: false },
        { description: "Sverige", isCorrect: true },
      ],
    },
    {
      options: [
        { description: "Slovakien", isCorrect: true },
        { description: "Serbien", isCorrect: false },
        { description: "Sydsudan", isCorrect: false },
      ],
    },
  ];

  return (
    <>
      <span className="fixed inset-0 w-screen h-screen bg-repeat bg-[url('/water2.webp')] pointer-events-none -z-50" />
      <QuizTemplate
        title="Quiz"
        questions={questions}
        referral="quiz1"
      />
    </>
  );
}
