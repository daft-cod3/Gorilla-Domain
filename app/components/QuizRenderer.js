"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function QuizRenderer({ questions, onRedo, onNextQuiz, onBackToSelection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setScore(0);
    setShowFeedback(false);
  }, [questions]);

  const currentQuestion = questions[currentIndex];
  const currentSelected = selectedAnswers[currentIndex];

  const handleAnswer = (answer) => {
    if (showFeedback) return;
    // prevent multiple answers

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    setShowFeedback(true); // Show feedback for previous
    setCurrentIndex(currentIndex - 1);
  };

  const skipQuestion = () => {
    setShowFeedback(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handleRedo = () => {
    setCurrentIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setScore(0);
    setShowFeedback(false);
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Congratulations! You completed the quiz.
        </h2>
        <p className="text-lg text-gray-900 dark:text-white">
          You scored: <span className="font-semibold text-blue-600">
            {score} / {questions.length}
          </span>
        </p>
        <p className="mt-2 text-sm text-gray-900 dark:text-white">
          {score === questions.length ? "Perfect score! Well done!" : score > questions.length / 2 ? "Good job! Keep practicing." : "Keep studying and try again."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleRedo}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200 font-medium"
          >
            Re-do Quiz
          </button>
          <button
            onClick={onNextQuiz}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
          >
            Next Quiz
          </button>
          <button
            onClick={onBackToSelection}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            Back to Main Quiz Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800
     rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <p className="text-lg text-gray-700 dark:text-white mb-4">{currentQuestion.question}</p>
        {currentQuestion.image && (
          <div className="mb-4 flex justify-center">
            <Image
              src={currentQuestion.image}
              alt="Part to identify"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
      <ul className="space-y-3 dark:text-white">
        {currentQuestion.options.map((option, idx) => {
          const isCorrect = option === currentQuestion.correctAnswer;
          const isSelected = option === currentSelected;
          let optionClass = "border-2 border-gray-300 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:border-blue-400 hover:bg-gray-400";

          if (showFeedback) {
            if (isSelected) {
              optionClass += isCorrect ? " bg-green-100 border-green-500 text-green-800" : " bg-red-100 border-red-500 text-red-800";
            } else if (isCorrect) {
              optionClass += " bg-green-100 border-green-400 text-green-700";
            } else {
              optionClass += " opacity-50";
            }
          }

          return (
            <li
              key={idx}
              className={optionClass}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex justify-between">
        <button
          onClick={previousQuestion}
          disabled={currentIndex === 0}
          className="bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg
           hover:bg-gray-600 transition-colors duration-200 
          font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        {!showFeedback && (
          <button
            onClick={skipQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg
             hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Skip
          </button>
        )}
        {showFeedback && (
          <button
            onClick={nextQuestion}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg
             hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
