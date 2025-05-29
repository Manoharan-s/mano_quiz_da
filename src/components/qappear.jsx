import React, { useEffect, useState } from "react";
import iplQuestions from "./question";
import Qstyle from "./qstyle";
import Thankyou from "./thankyou";
import Final from "./final score";

export default function Qappear(props) {
  const [num, setnum] = useState(null);

  useEffect(() => {
    const result = [];
    while (result.length < props.count) {
      const rand = Math.floor(Math.random() * 100);
      if (!result.includes(rand)) {
        result.push(rand);
      }
    }
    setnum(result);

    // update state once
  }, [props.count]);
  function disp(kk) {
    return <Qstyle question={iplQuestions[kk].question} />;
  }
  const [index, setindex] = useState(0);

  const [score, setscore] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleoclick(selectedOption) {
    const correctAnswer = iplQuestions[num[index]].answer;
    const kkk = iplQuestions[num[index]].options.indexOf(correctAnswer);
    setCorrectIndex(kkk);
    setShowAnswer(true);

    if (selectedOption === correctAnswer) {
      setscore(score + 1);
    }
    setTimeout(() => {
      setindex(index + 1);
      setShowAnswer(false);
      setCorrectIndex(null);
    }, 1500);
  }

  return (
    <div
      className={`quizappear ${num && index === num.length ? "final-bg" : ""}`}
    >
      <div
        className={`bebas-neue-regular ${
          num && index < num.length ? "questions" : ""
        }`}
      >
        {num && index < num.length ? (
          iplQuestions[num[index]].question
        ) : (
          <Thankyou />
        )}
      </div>

      <div class="buttonchoice bebas-neue-regular">
        {num && index < num.length && (
          <button
            className={`button1choice bb ${
              showAnswer && correctIndex == 0 ? "correct-option" : ""
            }`}
            onClick={() => handleoclick(iplQuestions[num[index]].options[0])}
          >
            {iplQuestions[num[index]].options[0]}
          </button>
        )}

        {num && index < num.length && (
          <button
            className={`button2choice bb ${
              showAnswer && correctIndex === 1 ? "correct-option" : ""
            }`}
            onClick={() => handleoclick(iplQuestions[num[index]].options[1])}
          >
            {iplQuestions[num[index]].options[1]}
          </button>
        )}
        {num && index < num.length && (
          <button
            className={`button3choice bb ${
              showAnswer && correctIndex === 2 ? "correct-option" : ""
            }`}
            onClick={() => handleoclick(iplQuestions[num[index]].options[2])}
          >
            {iplQuestions[num[index]].options[2]}
          </button>
        )}
        {num && index < num.length && (
          <button
            className={`button4choice bb ${
              showAnswer && correctIndex === 3 ? "correct-option" : ""
            }`}
            onClick={() => handleoclick(iplQuestions[num[index]].options[3])}
          >
            {iplQuestions[num[index]].options[3]}
          </button>
        )}
      </div>
      {/* <h5>this is number:{props.count}</h5> */}
      <div>{num && index === num.length && <Final sc={score} />}</div>

      {/* <h5>{num && num.join(", ")}</h5> */}
    </div>
  );
}
