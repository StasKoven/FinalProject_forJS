import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForumPage from "./pages/ForumPage";
import AddPostPage from "./pages/AddPostPage";
import LoginPage from "./pages/LoginPage";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import EditPostPage from "./pages/EditPostPage";
import RegistrationPage from "./pages/RegistrationPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="navbar">
            <a href="/">Forum</a>
            <div>
              <a href="/login">Login</a>
              <a href="/register" className="ml-4">Register</a>
              <a href="/forum/new" className="ml-4">Add Post</a>
              <a href="/courses" className="ml-4">Course</a>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ForumPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/forum/new" element={<AddPostPage />} />
            <Route path="/question/:id" element={<QuestionDetailPage />} />
            <Route path="/add-post" element={<AddPostPage />} />
            <Route path="/edit-post/:id" element={<EditPostPage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Forum for Developers. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
