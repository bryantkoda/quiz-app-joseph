import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import he from "he";

import "react-accessible-accordion/dist/fancy-example.css";

const AccordionBlock = ({ questions }) => {
  return (
    <Accordion className="xl:max-w-[1200px] w-full xl:w-[1200px]">
      {questions &&
        questions.map((item, index) => (
          <div
            key={index}
            className={`${
              item.correct_answer === item.your_Answer
                ? "bg-blueLight rounded-[5px]"
                : "bg-redLight rounded-[5px]"
            }`}
          >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="inline-flex items-start sm:items-center sm:flex-row flex-col justify-between w-[calc(100%_-_25px)]">
                    <span className="mb-4 sm:mb-0"> {he.decode(item.question)}</span>
                    <span className="text-right h-[28px] min-w-[100px] text-[14px] font-medium  text-white flex items-center justify-center p-2">
                      {item.correct_answer === item.your_Answer ? (
                        <span className="h-[28px] w-full rounded-[14px] flex items-center justify-center bg-green -ml-3 sm:ml-0">
                          Correct
                        </span>
                      ) : (
                        <span className="h-[28px] w-full rounded-[14px] flex items-center justify-center bg-red -ml-3 sm:ml-0">
                          Incorrect
                        </span>
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-[14px] flex flex-col sm:flex-row">
                  <span>
                    <span>Correct Answer : </span>
                    <span className="text-primary font-medium tracking-[1px] text-[14px]">
                      {item.correct_answer}
                    </span>
                  </span>
                  <span className="mt-1 sm:mt-0 ">
                    <span className="ml-0 sm:ml-[50px]">Your Answer : </span>
                    <span className="text-primary font-medium tracking-[1px] text-[14px]">
                      {item.your_Answer}
                    </span>
                  </span>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
        ))}
    </Accordion>
  );
};

export default AccordionBlock;
