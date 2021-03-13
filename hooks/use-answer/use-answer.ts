import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAnswerAction } from "@Redux/actions";
import { IStore } from "@Interfaces";
import { usePage } from "../use-page";

export const useAnswer = () => {
  const answers = useSelector((state: IStore) => state.userAnswer.data);
  
  const [submittingAnswer, setSubmittingAnswer] = useState(false);
  const dispatch = useDispatch();
  const { nextPage, currentPage } = usePage();
  const page = currentPage();

  const submitAnswer = async (answer: string) => {
    setSubmittingAnswer(true);
    await dispatch(UserAnswerAction.SetAnswer({ [page.asNumber - 1]: answer }));
    nextPage();
    setSubmittingAnswer(false);
  };
  useEffect(() => {
    if (answers[currentPage().asString]) {
      nextPage();
    }
  }, [answers]);

  return { answers, submitAnswer, submittingAnswer };
};
