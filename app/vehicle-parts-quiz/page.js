"use client";

import { useState } from "react";
import { vehiclePartsQuizzes } from "../data/vehiclePartsData";
import Image from 'next/image';
import QuizRenderer from "../components/QuizRenderer";

export default function VehiclePartsQuiz() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleRedo = () => {
    setSelectedQuiz(vehiclePartsQuizzes[currentQuizIndex]);
  };

  const handleNextQuiz = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * vehiclePartsQuizzes.length);
    } while (nextIndex === currentQuizIndex);
    setCurrentQuizIndex(nextIndex);
    setSelectedQuiz(vehiclePartsQuizzes[nextIndex]);
  };

  const handleBackToSelection = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-700 dark:text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => setSelectedQuiz(null)}
            className="mb-6 bg-white text-gray-900 dark:bg-gray-600 border border-blue-500
             dark:text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            ← Back to Quiz Selection
          </button>
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            {selectedQuiz.name}
          </h1>
          <QuizRenderer
            questions={selectedQuiz.questions}
            onRedo={handleRedo}
            onNextQuiz={handleNextQuiz}
            onBackToSelection={handleBackToSelection}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-800
     dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white p-4 mb-8 mt-4">
          Vehicle Parts Quiz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <Image
              src="/quiz.png"
              alt="quiz layout"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How to Take the Quiz
              </h2>
              <ul className="text-gray-800 font-semibold font-serif text-sm space-y-2">
                <li>• Each quiz has multiple questions with four answer choices</li>
                <li>• Some questions include images for part identification</li>
                <li>• Correct answers are shown after selecting your choice</li>
                <li>• Your score is displayed immediately after completing the quiz</li>
                <li>• Quizzes are updated weekly with new content</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Select a Quiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclePartsQuizzes.map((quiz, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedQuiz(quiz);
                setCurrentQuizIndex(index);
              }}
              className="bg-white dark:bg-gray-800 dark:text-white text-gray-900 rounded-xl shadow-lg hover:shadow-xl
               transition-shadow duration-400 cursor-pointer p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
               
                <p className="text-gray-900 dark:text-white mb-4">
                  {quiz.questions.length} questions
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
