import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function QuestionDetailPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const mockQuestion = {
      id,
      title: "How to learn Python?",
      content: "I want to learn Python but don't know where to start.",
      author: "Alice",
      date: "2023-12-01",
    };
    const mockAnswers = [
      {
        id: 1,
        content: "Start with the official Python tutorial.",
        author: "John",
        date: "2023-12-02",
      },
      {
        id: 2,
        content: "Try learning Python by solving problems on LeetCode.",
        author: "Emma",
        date: "2023-12-03",
      },
    ];
    setQuestion(mockQuestion);
    setAnswers(mockAnswers);
  }, [id]);

  if (!question) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="card">
        <h1 className="text-2xl font-bold">{question.title}</h1>
        <p className="text-gray-600">{question.content}</p>
        <div className="text-sm text-gray-500 mt-2">
          By {question.author} on {question.date}
        </div>
      </div>
      <h2 className="text-xl font-bold mt-6">Answers</h2>
      {answers.map((answer) => (
        <div key={answer.id} className="card">
          <p>{answer.content}</p>
          <div className="text-sm text-gray-500 mt-2">
            By {answer.author} on {answer.date}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionDetailPage;
