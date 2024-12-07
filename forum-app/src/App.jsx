import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForumPage from "./pages/ForumPage";
import AddPostPage from "./pages/AddPostPage";
import LoginPage from "./pages/LoginPage";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import EditPostPage from "./pages/EditPostPage";
import RegistrationPage from "./pages/RegistrationPage";
import CoursesPage from "./pages/CoursesPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <header className="bg-secondary text-white shadow-md">
          <nav className="navbar flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
            <a href="/" className="text-lg font-bold">Forum</a>
            <div>
              <a href="/login" className="text-white hover:text-primary mx-2">Login</a>
              <a href="/register" className="text-white hover:text-primary mx-2">Register</a>
              <a href="/forum/new" className="text-white hover:text-primary mx-2">Add Post</a>
              <a href="/courses" className="text-white hover:text-primary mx-2">Courses</a>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-6">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
