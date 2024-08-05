import { useState } from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component in React is an independent, reusable piece of UI.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is an object that determines how that component renders and behaves.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is a prop in React?",
      answer:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
      isOpen: false,
    },
  ]);

  return (
    <div className=" p-10">
      <h1 className="text-4xl font-bold mb-8">
        React Frequently Asked Questions
      </h1>

      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
