import React, { useEffect } from "react";

import { Link, Element } from "react-scroll";
import { useState } from "react";

import Quiz from "./quizpa";

export default function START() {
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 10,
        size: { min: 2, max: 40, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.8 },
          y: { min: 0, max: 0.2 },
        },
        colors: {
          background: "#2e152e",
          particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"],
        },
        blending: "screen",
        opacity: { center: 1, edge: 1 },
        skew: -1,
        shapes: ["c", "s", "t"],
      });
    }
  }, []);
  const [move, setmove] = useState(false);
  function handleMouseOver() {
    setmove(true);
  }
  function handleMouseOut() {
    setmove(false);
  }

  return (
    <div>
      <div
        className="finisher-header"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Link to="quiz" smooth={true} duration={700}>
          <button
            class="kk caveat-brush-regular"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ backgroundColor: move ? "black" : "white" }}
          >
            START QUIZ
          </button>
        </Link>
      </div>
      <div>
        <Element name="quiz">
          <Quiz />
        </Element>
      </div>
    </div>
  );
}
