import styles from "@/styles/Question.module.scss";
import { useState } from "react";
import { nanoid } from "nanoid";

const quizQuestions = [
  {
    id: 1,
    question: "Are you old?",
    answers: ["0-6", "7-8", "9-63"],
  },
  {
    id: 2,
    question: "Which you favorite color",
    answers: [
      "Gray",
      "Pink",
      "Red",
      "Yellow",
      "Green",
      "Purple",
      "Deep purple",
      "Other",
    ],
  },
  {
    id: 3,
    question: "Do you like chocolate?",
    answers: ["Yep", "Nope", "Maybe"],
  },
  {
    id: 4,
    question: "What do you think about sun?",
    answers: ["It's funny", "It's brutal", "It's wrong"],
  },
  {
    id: 5,
    question: "Do you beautiful?",
    answers: ["My mom says yes :D", "Nobody says yes :'("],
  },
];

export default function Question() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizQuestionItem, setQuizQuestionItem] = useState(quizQuestions[0]);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleChange = event => {
    const answer = {
      id: nanoid(),
      question: quizQuestionItem.question,
      answer: event.target.value,
    };

    const answers = [...userAnswers, answer];
    setUserAnswers(answers);
    sessionStorage.setItem("user-answers", JSON.stringify(answers));

    let number = questionNumber + 1;
    if (number >= quizQuestions.length) {
      number = 0;
    }

    setQuestionNumber(number);
    setQuizQuestionItem(quizQuestions[number]);
  };

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{quizQuestionItem.question}</legend>
          {quizQuestionItem.answers.map(answer => (
            <label key={answer} className={styles.label}>
              <input
                type="radio"
                className={styles.input}
                name="answer"
                value={answer}
                onChange={handleChange}
              />
              {answer}
            </label>
          ))}
        </fieldset>
      </form>
    </section>
  );
}
