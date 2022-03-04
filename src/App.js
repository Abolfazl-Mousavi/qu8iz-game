import React, { useState } from "react";
import { BsAppIndicator } from "react-icons/bs";
import "./App.css";
import { Navbar, QCard } from "./components";
import Categories from "./data/traviaCategory";
import axios from "axios";

function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState();
  const AMOUNT = 10;
  const getTravia = async (amount, category) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}${
      category ? `&category=${category}` : ``
    }&type=multiple`;

    const { data } = await axios.get(endpoint);
    setQuestions(data.results);
  };

  const startGame = () => {
    setGameOver();
    getTravia(AMOUNT, category);
  };
  return (
    <div className="bg-color2 h-screen">
      <Navbar score={score} />
      {gameOver && (
        <>
          <div className=" mt-5 flex  justify-center">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className=" rounded bg-color4 p-3"
              title="category"
              name="selectList"
              id="selectList"
            >
              <option value={""}>choose a category ...</option>
              {Categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div className="  flex justify-center mt-5">
            <button
              onClick={() => startGame()}
              className="bg-orange-400 w-40 h-40 rounded-full text-white text-3xl font-semibold"
            >
              Start
            </button>
          </div>
        </>
      )}

      {!gameOver && (
        <QCard
          amount={AMOUNT}
          setGameOver={setGameOver}
          questions={questions}
          setQuestions={setQuestions}
          setScore={setScore}
          score={score}
        />
      )}
    </div>
  );
}

export default App;
