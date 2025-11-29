"use client";

import QuizRenderer from "../components/QuizRenderer";
import { generalQuestionsQuizData } from "../data/generalQuestionsData";
import { vehiclePartsQuizData } from "../data/vehiclePartsData";
import { useState } from "react";
import Image from 'next/image';

export default function Quiz() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizType, setQuizType] = useState(null); // 'general' or 'vehicle'

  const handleRedo = () => {
    if (quizType === 'general') {
      setSelectedQuiz(generalQuestionsQuizData[currentQuizIndex]);
    } else {
      setSelectedQuiz(vehiclePartsQuizData[currentQuizIndex]);
    }
  };

  const handleNextQuiz = () => {
    if (quizType === 'general') {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * generalQuestionsQuizData.length);
      } while (nextIndex === currentQuizIndex);
      setCurrentQuizIndex(nextIndex);
      setSelectedQuiz(generalQuestionsQuizData[nextIndex]);
    } else {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * vehiclePartsQuizData.length);
      } while (nextIndex === currentQuizIndex);
      setCurrentQuizIndex(nextIndex);
      setSelectedQuiz(vehiclePartsQuizData[nextIndex]);
    }
  };

  const handleBackToSelection = () => {
    setSelectedQuiz(null);
    setQuizType(null);
  };

  if (selectedQuiz) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-700 dark:text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={handleBackToSelection}
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
          Quiz
        </h1>

        <div className="flex sm:flex-row flex-col items-center justify-around mb-12 bg-gray-200 rounded-lg p-6">
            <div className=" p-6 rounded-lg shadow-lg">
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
            <div className="m-4">
            <Image
              src="/general-quiz/sign.gif"
              alt="quiz layout"
              width={300}
              height={400}
              className="rounded-lg shadow-lg p-6"
            />
            </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            General Questions Quiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {generalQuestionsQuizData.map((quiz, index) => (
            <div
              key={`general-${index}`}
              onClick={() => {
                setSelectedQuiz(quiz);
                setCurrentQuizIndex(index);
                setQuizType('general');
              }}
              className="bg-white dark:bg-gray-800 dark:text-white text-black rounded-xl shadow-lg hover:shadow-xl
               transition-shadow duration-500 cursor-pointer p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="w-min-full h-16 bg-blue-200 rounded-full flex flex-col items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">
                    {quiz.name}
                  </span>
                  
                </div>
               
                <p className="text-black dark:text-white mb-6">
                  {quiz.questions.length} questions
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200 font-medium hover:cursor-pointer">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Vehicle Parts Quiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclePartsQuizData.map((quiz, index) => (
            <div
              key={`vehicle-${index}`}
              onClick={() => {
                setSelectedQuiz(quiz);
                setCurrentQuizIndex(index);
                setQuizType('vehicle');
              }}
              className="bg-white dark:bg-gray-800 dark:text-white text-black rounded-xl shadow-lg hover:shadow-xl
               transition-shadow duration-500 cursor-pointer p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="w-min-full h-16 bg-blue-200 rounded-full flex flex-col items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">
                    {quiz.name}
                  </span>
                  
                </div>
               
                <p className="text-black dark:text-white mb-6">
                  {quiz.questions.length} questions
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200 font-medium hover:cursor-pointer">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
