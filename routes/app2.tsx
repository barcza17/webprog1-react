import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "Mi a HTML szerepe a webfejlesztésben?",
    options: ["Stílusok hozzáadása", "Weboldal struktúrája", "Interaktivitás kezelése", "Adatbázis-kezelés"],
    correctIndex: 1,
  },
  {
    question: "Melyik a helyes HTML tag egy link létrehozására?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctIndex: 1,
  },
  {
    question: "Melyik JavaScript metódus ír ki szöveget a konzolra?",
    options: ["console.log()", "alert()", "document.write()", "print()"],
    correctIndex: 0,
  },
];

export default function App2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedIndex(null);
    setCurrentQuestion(currentQuestion + 1);
  };

}
// 4. reszallapot teszt