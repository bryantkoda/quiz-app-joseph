import React, { useContext, useEffect, useState } from "react";
import { questionsList } from "../service/questions.service";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context";
import QuestionCard from "../components/questionCard";
import NextButton from "../components/nextButton";
import Loader from "../components/loading";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { questions, setQuestionsList } = useContext(DataContext);
  const [currentAns, setCurrentAns] = useState();

  let navigate = useNavigate();

  const fetchData = async () => {
    try {
      const data = await questionsList();
      setQuestionsList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const nextQue = () => {
    questions[activeIndex]["your_Answer"] = currentAns;
    setCurrentAns();
    if (activeIndex < 9) {
      setActiveIndex((prev) => prev + 1);
    } else {
      navigate("/score-board");
    }
  };

  const RenderQuestion = (question) => {
    return (
      <QuestionCard
        question={question}
        activeIndex={activeIndex}
        currentAns={currentAns}
        setCurrentAns={setCurrentAns}
      />
    );
  };

  return (
    <div className="min-h-screen p-3 sm:p-5 flex flex-col items-center justify-center questions-outer">
      <div
        className="text-[40px] font-bold text-primary mb-[20px] lg:mb-[50px]"
        data-aos="zoom-in"
      >
        Quiz App
      </div>
      <div className="flex items-center justify-center flex-col w-full">
        {questions?.length === 0 ? (
          <Loader />
        ) : (
          <>
            <RenderQuestion item={questions?.[activeIndex]} />
            <div className="mb-[50px]">
              <NextButton
                nextQue={nextQue}
                currentAns={currentAns}
                activeIndex={activeIndex}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
