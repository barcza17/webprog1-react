
import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "Mi Magyarország fővárosa?",
    options: ["Debrecen", "Szeged", "Budapest", "Pécs"],
    correctIndex: 2,
  },
  {
    question: "Mennyi 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctIndex: 1,
  },
  {
    question: "Melyik nem JavaScript adat típus?",
    options: ["number", "string", "object", "float"],
    correctIndex: 3,
  },
];

export default function App2() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].correctIndex) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>❓ Mini kvíz</h2>
      {showResult ? (
        <p>🎉 Végeredmény: {score} / {questions.length}</p>
      ) : (
        <div>
          <p><strong>{questions[current].question}</strong></p>
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} style={{ display: "block", margin: "5px 0" }}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
