import dotenv from "dotenv";
import nock from "nock";
import "jest-styled-components";
import "@testing-library/jest-dom";

dotenv.config({ path: ".env.test" });

nock("http://localhost:9000")
  .get("/api/question")
  .query({
    amount: 10,
    difficulty: "hard",
    type: "boolean",
  })
  .reply(200, {
    response_code: 0,
    results: [
      {
        category: "Vehicles",
        type: "boolean",
        difficulty: "hard",
        question:
          "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Film",
        type: "boolean",
        difficulty: "hard",
        question:
          "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Television",
        type: "boolean",
        difficulty: "hard",
        question: "The Klingon home planet is Qo&#039;noS.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "hard",
        question:
          "Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Science: Mathematics",
        type: "boolean",
        difficulty: "hard",
        question:
          "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "hard",
        question:
          "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Japanese Anime & Manga",
        type: "boolean",
        difficulty: "hard",
        question:
          "The character Plum from &quot;No Game No Life&quot; is a girl.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question: "The man that shot Alexander Hamilton was named Aaron Burr.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "hard",
        question:
          "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ],
  });

nock("http://localhost:9000")
  .get("/api/success")
  .reply(200, { success: true });

nock("http://localhost:9000")
  .get("/api/not-found")
  .reply(404, { success: false });
