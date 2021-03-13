import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { convertUnicode } from "@Utils/convert-unicode";
import { IStore } from "@Interfaces";

export const useResult = () => {
  const questions = useSelector((state: IStore) => state.trivia.data?.results);
  const answers = useSelector((state: IStore) => state.userAnswer.data);
  let finalScore = 0;
  const answered = questions ? Object.keys(answers) : [];
  const result = answered.map((key: string | number) => {
    const userAns = answers[key]?.toLowerCase();
    const { correct_answer: correctAns, question } = questions[key];
    const score = userAns.toLowerCase() === correctAns.toLowerCase() ? 1 : 0;
    finalScore += score;
    return {
      question: convertUnicode(question),
      score,
      emoji: score ? "👍" : "👎",
    };
  });

  const router = useRouter();
  useEffect(() => {
    if (!questions) {
      router.push("/");
    }
  }, [questions]);
  return {
    result,
    finalScore: `${finalScore}/10`,
    completed: answered.length === 10,
  };
};
