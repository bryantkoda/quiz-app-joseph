import React from "react";
import { Link } from "react-router-dom";
import quizImage from "../assets/images/quiz.jpg";

const Index = () => {
  return (
    <div className="min-h-screen p-5 flex items-center justify-center">
      <div className="flex flex-col items-center max-w-full" data-aos="zoom-in">
        <Link to="/" className="text-[40px] font-bold text-primary">
          Quiz App
        </Link>
        <h1 className="text-[24px] sm:text-[32px] font-medium text-black-500 text-center mb-1" data-aos="zoom-in" data-aos-delay="300">
          Welcome to the Trivia Challenge !
        </h1>
        <p className="text-[16px] sm:text-[20px] text-semibold text-center mb-1" data-aos="zoom-in" data-aos-delay="500">
          You will be presented with 10 True or False questions.
        </p>
        <img src={quizImage} className="max-w-[300px] sm:max-w-[400px]" data-aos="zoom-in" data-aos-delay="700" alt="quiz"/>
        <p className="text-[24px] sm:text-[32px] mb-5" data-aos="zoom-in" data-aos-delay="900">
          Can you score <span className="font-bold text-primary">100%</span> ?
        </p>
        <Link to="/questions" className="primary-btn large-btn" data-aos="zoom-in" data-aos-delay="1100">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Index;
