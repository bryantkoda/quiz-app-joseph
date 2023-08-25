import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-accessible-accordion/dist/fancy-example.css";
import AccordionBlock from "../components/accordion";
import { DataContext } from "../context";

const Score = () => {
  const { questions } = useContext(DataContext);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let count = 0;
    questions.map((question) => {
      if (question.correct_answer === question.your_Answer) {
        count = count + 1;
      }
    });
    setScore(count);
  }, []);

  return (
    <div className="min-h-screen p-3 sm:p-5  flex flex-col items-center justify-center">
      <div className="text-[40px] font-bold text-primary">Quiz App</div>
      <div className="flex items-center justify-center flex-col w-full">
        <h2 className="flex flex-col items-center justify-center text-[28px] font-medium text-black mb-5">
          <p className="text-[28px] mb-[10px]">
            {score > 3 ? <span className="text-green">Congratulations!</span> : <span className="text-red">Better Luck Next Time</span>}
          </p>
          <p className="text-[22px] text-textColor"> You scored ({score} / 10) </p>
        </h2>
        <AccordionBlock questions={questions} />
      </div>
      <Link to="/" className="primary-btn large-btn my-[50px]">
        Play Again
      </Link>
    </div>
  );
};

export default Score;
