import { IStore } from "@Interfaces";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { convertUnicode } from "@Utils/convert-unicode";
import { usePage } from "../use-page";

export const useQuestion = () => {
  const questions = useSelector((state: IStore) => state.trivia.data?.results);
  const { currentPage } = usePage();
  const { category, question } = questions
    ? questions[currentPage().asNumber - 1]
    : { category: "", question: "" };

  const router = useRouter();
  useEffect(() => {
    if (!questions) {
      router.push("/");
    }
  }, [questions]);
  return { questions, category, question: convertUnicode(question) };
};
