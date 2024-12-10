import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function QuestionDetailPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState({ name: '', content: '' });

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const currentQuestion = savedPosts.find((post) => post.id === parseInt(id));
    setQuestion(currentQuestion);

    const savedAnswers =
      JSON.parse(localStorage.getItem(`answers_${id}`)) || [];
    setAnswers(savedAnswers);
  }, [id]);

  const saveAnswersToLocalStorage = (updatedAnswers) => {
    localStorage.setItem(`answers_${id}`, JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const handleAddAnswer = () => {
    if (!newAnswer.name.trim() || !newAnswer.content.trim()) return;

    const updatedAnswers = [
      ...answers,
      {
        id: Date.now(),
        content: newAnswer.content,
        author: newAnswer.name,
        date: new Date().toISOString().split('T')[0],
      },
    ];

    setNewAnswer({ name: '', content: '' });
    saveAnswersToLocalStorage(updatedAnswers);
  };

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
      {answers.length === 0 ? (
        <p>No answers yet. Be the first to reply!</p>
      ) : (
        answers.map((answer) => (
          <div key={answer.id} className="card">
            <p>{answer.content}</p>
            <div className="text-sm text-gray-500 mt-2">
              By {answer.author} on {answer.date}
            </div>
          </div>
        ))
      )}

      <div className="form-container mt-6">
        <h3 className="form-title">Add Your Answer</h3>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={newAnswer.name}
            onChange={(e) =>
              setNewAnswer((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter your name"
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Your Answer</label>
          <textarea
            value={newAnswer.content}
            onChange={(e) =>
              setNewAnswer((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder="Write your answer"
            className="textarea"
          />
        </div>
        <button className="form-button" onClick={handleAddAnswer}>
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default QuestionDetailPage;
