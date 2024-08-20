"use client";
import QuizTemplate from "../quiztemplate";

export default function Quiz2() {
  const questions = [
    {
      options: [
        { description: "2014", isCorrect: true },
        { description: "2017", isCorrect: false },
        { description: "2019", isCorrect: false },
      ],
    },
    {
      options: [
        { description: "Schweiz", isCorrect: true },
        { description: "Italien", isCorrect: false },
        { description: "Polen", isCorrect: false },
      ],
    },
    {
      options: [
        { description: "58", isCorrect: false },
        { description: "69", isCorrect: true },
        { description: "73", isCorrect: false },
      ],
    },
    {
      options: [
        { description: "Juni-juli", isCorrect: true },
        { description: "September-oktober", isCorrect: false },
        { description: "November-december", isCorrect: false },
      ],
    },
  ];

  return (
    <>
      <span className="fixed inset-0 w-screen h-screen bg-repeat bg-[url('/water2.webp')] pointer-events-none -z-50" />
      <QuizTemplate
        title="Quiz"
        questions={questions}
        referral="quiz2"
      />
    </>
  );
}
