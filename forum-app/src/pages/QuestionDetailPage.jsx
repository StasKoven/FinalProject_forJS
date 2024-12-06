import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function QuestionDetailPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState({ name: "", content: "" });
  const [editingAnswer, setEditingAnswer] = useState(null);

  useEffect(() => {
    const mockQuestion = {
      id,
      title: "How to learn Python?",
      content: "I want to learn Python but don't know where to start.",
      author: "Alice",
      date: "2023-12-01",
    };

    const savedAnswers = JSON.parse(localStorage.getItem(`answers_${id}`)) || [];
    setQuestion(mockQuestion);
    setAnswers(savedAnswers);
  }, [id]);

  const saveAnswersToLocalStorage = (updatedAnswers) => {
    localStorage.setItem(`answers_${id}`, JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const handleAddAnswer = () => {
    if (!newAnswer.name.trim() || !newAnswer.content.trim()) return;

    const newAnswers = [
      ...answers,
      {
        id: Date.now(),
        content: newAnswer.content,
        author: newAnswer.name,
        date: new Date().toISOString().split("T")[0],
      },
    ];

    setNewAnswer({ name: "", content: "" });
    saveAnswersToLocalStorage(newAnswers);
  };

  const handleDeleteAnswer = (answerId) => {
    const updatedAnswers = answers.filter((answer) => answer.id !== answerId);
    saveAnswersToLocalStorage(updatedAnswers);
  };

  const handleEditAnswer = (answer) => {
    setEditingAnswer(answer);
    setNewAnswer({ name: answer.author, content: answer.content });
  };

  const handleSaveEdit = () => {
    if (!newAnswer.name.trim() || !newAnswer.content.trim()) return;

    const updatedAnswers = answers.map((answer) =>
      answer.id === editingAnswer.id
        ? { ...answer, content: newAnswer.content, author: newAnswer.name }
        : answer
    );

    setEditingAnswer(null);
    setNewAnswer({ name: "", content: "" });
    saveAnswersToLocalStorage(updatedAnswers);
  };

  const cancelEdit = () => {
    setEditingAnswer(null);
    setNewAnswer({ name: "", content: "" });
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
          <div
            key={answer.id}
            className="card relative group"
          >
            <p>{answer.content}</p>
            <div className="text-sm text-gray-500 mt-2">
              By {answer.author} on {answer.date}
            </div>
            <div className="absolute top-0 right-0 hidden group-hover:flex gap-2 p-2">
              <button
                onClick={() => handleEditAnswer(answer)}
                className="form-button edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteAnswer(answer.id)}
                className="form-button delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="form-container mt-6">
        <h3 className="form-title">
          {editingAnswer ? "Edit Your Answer" : "Add Your Answer"}
        </h3>
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
        {editingAnswer ? (
          <div className="form-actions">
            <button className="form-button" onClick={handleSaveEdit}>
              Save Changes
            </button>
            <button className="form-button cancel-button" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="form-button" onClick={handleAddAnswer}>
            Submit Answer
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionDetailPage;
