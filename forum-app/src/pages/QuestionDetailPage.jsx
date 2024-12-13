import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/API';

function QuestionDetailPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    const loadQuestion = async () => {
      try {
        const data = await fetchProductById(id);
        setQuestion(data);
        setAnswers([]); // Initialize with empty answers or fetch from a service
      } catch (err) {
        console.error('Error loading question:', err);
      }
    };
    loadQuestion();
  }, [id]);

  const handleAddAnswer = () => {
    if (newAnswer.trim() === '') return;

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { id: Date.now(), content: newAnswer, author: 'Anonymous' },
    ]);
    setNewAnswer('');
  };

  return (
    <div className="question-container">
      {question ? (
        <div className="question-card">
          <h1>{question.title}</h1>
          <p>{question.body}</p>
          <h2>Answers</h2>
          {answers.length > 0 ? (
            answers.map((answer) => (
              <div key={answer.id} className="answer-card">
                <p>{answer.content}</p>
                <span>- {answer.author}</span>
              </div>
            ))
          ) : (
            <p>No answers yet. Be the first to reply!</p>
          )}
          <div className="answer-form">
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Write your answer here..."
            />
            <button className="form-button" onClick={handleAddAnswer}>
              Submit Answer
            </button>
          </div>
        </div>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
}

export default QuestionDetailPage;