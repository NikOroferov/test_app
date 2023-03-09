import styles from "@/styles/Question.module.scss";
import { useEffect, useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "Are you old?",
    answers: ["Yep", "Nope", "Maybe"],
  },
  {
    id: 2,
    question: "Do you like chocolate?",
    answers: ["Yep", "Nope", "Maybe"],
  },
  {
    id: 3,
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
    id: 4,
    question: "What do you think about sun?",
    answers: ["It's funny", "It's brutal", "It's wrong"],
  },
  {
    id: 5,
    question: "Do you beautiful?",
    answers: ["Yep", "Nope", "My mom says yes"],
  },
];

export default function Question() {
  const [question, setQuestion] = useState(quizQuestions[0]);
  const [answer, setAnswer] = useState(null);

  const handleChange = event => {
    console.log(event.target);
  };

  const handleSubmit = () => {
    console.log(question);
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{question.question}</legend>
          {question ? (
            question.answers.map(answer => (
              <label key={answer}>
                <input
                  type="radio"
                  className={styles.input}
                  name="answer"
                  value={answer}
                  onChange={handleChange}
                />
                {answer}
              </label>
            ))
          ) : (
            <p>Something went wrong</p>
          )}
        </fieldset>
        <button type="submit" className={styles.button}>
          Next
        </button>
      </form>
    </section>
  );
}
