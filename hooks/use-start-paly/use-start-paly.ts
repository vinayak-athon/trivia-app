import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { TriviaAction, UserAnswerAction } from "@Redux/actions";

export const useStartPaly = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const startPlay = async () => {
    await dispatch(TriviaAction.ResetQuestions());
    await dispatch(UserAnswerAction.ResetAnswers());
    router.push("/question");
  };

  return { startPlay };
};
