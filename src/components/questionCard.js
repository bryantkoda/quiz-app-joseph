import "aos/dist/aos.css";
import React from "react";
import he from "he";

const QuestionCard = ({ question, activeIndex, currentAns, setCurrentAns }) => {
  return (
    <div className="w-full lg:w-auto">
      <h2
        className="flex items-center text-center justify-center text-[22px] lg:text-[28px] font-medium text-black mb-[50px]"
      >
        {question.item?.category}
      </h2>
      <div
        className="mb-[50px] flex flex-col items-center justify-center que-card w-full lg:w-auto"
      >
        <div className="h-full py-[20px] p-4 lg:px-[50px] rounded-md max-w-[100%] w-full lg:max-w-[600px] lg:w-[600px] min-h-auto sm:min-h-[250px] lg:min-h-[350px] flex flex-col items-center justify-center bg-white z-20">
          <h1 className="text-center text-[22px] mb-[10px] lg:text-[28px] lg:mb-[30px]" >
            <span className="text-primary">{activeIndex + 1}</span> of 10
          </h1>
          <p className="text-center text-[16px] leading-[28px] lg:text-[18px] mb-[20px] lg:leading-[34px] text-textColor lg:mb-[50px]" >
            {he.decode(question.item?.question)}
          </p>
          <div className="flex justify-center">
            <div className="relative h-[40px] w-[100px] mx-4 cursor-pointer">
              <input
                type="radio"
                id={`true_${activeIndex}`}
                name="Answer"
                value="True"
                className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 cursor-pointer custom-checkbox"
                checked={currentAns === "True"}
                onChange={(e) => {
                  setCurrentAns(e.target.value);
                }}
              />
              <label
                className="h-[40px] w-[100px] bg-white border-2 border-secondary rounded-[20px] flex items-center justify-center"
                htmlFor={`true_${activeIndex}`}
              >
                True
              </label>
            </div>
            <div className="relative h-[40px] w-[100px] mx-4 cursor-pointer">
              <input
                type="radio"
                id={`false_${activeIndex}`}
                name="Answer"
                value="False"
                className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 cursor-pointer custom-checkbox"
                checked={currentAns === "False"}
                onChange={(e) => {
                  setCurrentAns(e.target.value);
                }}
              />
              <label
                className="h-[40px] w-[100px] bg-white border-2 border-secondary rounded-[20px] flex items-center justify-center"
                htmlFor={`false_${activeIndex}`}
              >
                False
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
