import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const nextPage = () => {
    const nextId = Number(id) + 1;
    if (nextId > 10) {
      router.push("/results");
    } else {
      router.push(`/question/${nextId}`);
    }
  };

  const currentPage = () => ({
    asString: id.toString(),
    asNumber: Number(id),
  });

  useEffect(() => {
    if (
      !currentPage().asNumber ||
      currentPage().asNumber > 10 ||
      currentPage().asNumber < 1
    ) {
      router.push("/404");
    }
  }, [id]);
  return {
    nextPage,
    currentPage,
  };
};
