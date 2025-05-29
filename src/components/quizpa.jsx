import React from "react";

import { Link, Element } from "react-scroll";
import { useState } from "react";

import Qappear from "./qappear";

export default function Quiz() {
  const [move1, setmove1] = useState(false);
  function handleMouseOver1() {
    setmove1(true);
  }
  function handleMouseOut1() {
    setmove1(false);
  }
  const [move2, setmove2] = useState(false);
  function handleMouseOver2() {
    setmove2(true);
  }
  function handleMouseOut2() {
    setmove2(false);
  }
  const [move3, setmove3] = useState(false);
  function handleMouseOver3() {
    setmove3(true);
  }
  function handleMouseOut3() {
    setmove3(false);
  }
  const [move4, setmove4] = useState(false);
  function handleMouseOver4() {
    setmove4(true);
  }
  function handleMouseOut4() {
    setmove4(false);
  }
  const [numQuestions, setNumQuestions] = useState(null);

  function handleClick(value) {
    setNumQuestions(value);
  }

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1 class="qz caveat-brush-regular"> NUMBER OF QUESTIONS </h1>
        <div class="buttons">
          <Link to="quizSection" smooth={true} duration={700}>
            <button
              class="button1  caveat-brush-regular"
              style={{ backgroundColor: move1 ? "black" : "transparent" }}
              onMouseOver={handleMouseOver1}
              onMouseOut={handleMouseOut1}
              onClick={() => handleClick(5)}
            >
              5
            </button>
          </Link>
          <Link to="quizSection" smooth={true} duration={500}>
            <button
              class="button2  caveat-brush-regular"
              style={{ backgroundColor: move2 ? "black" : "transparent" }}
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
              onClick={() => handleClick(10)}
            >
              10
            </button>
          </Link>
          <Link to="quizSection" smooth={true} duration={500}>
            <button
              class="button3  caveat-brush-regular"
              style={{ backgroundColor: move3 ? "black" : "transparent" }}
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
              onClick={() => handleClick(15)}
            >
              15
            </button>
          </Link>
          <Link to="quizSection" smooth={true} duration={500}>
            <button
              class="button4  caveat-brush-regular"
              style={{ backgroundColor: move4 ? "black" : "transparent" }}
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
              onClick={() => handleClick(20)}
            >
              20
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Element name="quizSection"></Element>
        <div>{numQuestions && <Qappear count={numQuestions} />}</div>
      </div>
    </div>
  );
}
