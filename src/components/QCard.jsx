import React, { useState, useEffect } from "react";
const QCard = ({
  questions,
  setScore,
  setQuestions,
  score,
  setGameOver,
  amount,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);
  const [userSelect, setUserSelect] = useState();

  useEffect(() => {
    setOptions(
      questions &&
        shuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );

    return () => {};
  }, [questions, currentQuestion]);

  const ScoreBD = () => {
    if (questions[currentQuestion]?.difficulty === "easy") {
    }
  };

  const shuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const USelect = (sop) => {
    setUserSelect(sop);
    if (sop === questions[currentQuestion]?.correct_answer) {
      if (questions[currentQuestion]?.difficulty === "easy") {
        setScore(score + 1);
      } else if (questions[currentQuestion]?.difficulty === "medium") {
        setScore(score + 2);
      } else if (questions[currentQuestion]?.difficulty === "hard") {
        setScore(score + 3);
      }
    }
  };

  const CColor = (op) => {
    const correct = questions[currentQuestion].correct_answer;

    if (userSelect === op && userSelect === correct) {
      return "bg-green-800 text-white";
    } else {
      return "bg-red-900 text-white";
    }
  };

  const GetQuestion = () => {
    if (questions) {
      var str = questions[currentQuestion].question;
      str = str.replace("&#039;", "'");
      str = str.replace("&#039;", "'");
      str = str.replace("&#039;", "'");
      str = str.replace("&#039;", "'");
      str = str.replace("&quot;", '"');
      str = str.replace("&quot;", '"');
      str = str.replace("&quot;", '"');
      str = str.replace("&quot;", '"');

      return str;
    }
  };

  const Next = () => {
    if (currentQuestion + 1 === amount) {
      setGameOver(true);
      setScore(0);
    }

    setUserSelect(null);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className=" mt-5 flex flex-col items-center">
      <div className="mx-2 h-full max-w-xl bg-color4 rounded-lg p-3">
        <div className="flex justify-between items-center w-full">
          <span className=" text-white bg-teal-600 rounded-md p-1 px-2">
            {questions && questions[currentQuestion].difficulty}
          </span>
          <h3 className="text-indigo-900 font-semibold text-xl">Question</h3>
          <span>01:20</span>
        </div>
        <div className="text-justify  bg-color2 rounded-lg  py-5 px-2 mt-3">
          <p>{GetQuestion()}</p>
        </div>
        <div className=" grid grid-rows-2 grid-cols-2 mt-2">
          {options &&
            options.map((op, i) => (
              <button
                disabled={userSelect}
                key={i}
                onClick={() => USelect(op)}
                className={`${
                  userSelect &&
                  op === questions[currentQuestion].correct_answer &&
                  `bg-green-800 text-white`
                }  ${userSelect === op && CColor(op)}    bg-color3
              m-1 flex items-center justify-around rounded px-4 py-3 cursor-pointer`}
              >
                {op}
              </button>
            ))}
        </div>
      </div>
      {userSelect && (
        <button
          onClick={() => Next()}
          className="bg-indigo-900 px-4 py-2 rounded-md text-white w-2/6 font-semibold text-lg mt-4 "
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QCard;
