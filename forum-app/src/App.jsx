import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForumPage from './pages/ForumPage';
import AddPostPage from './pages/AddPostPage';
import LoginPage from './pages/LoginPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import EditPostPage from './pages/EditPostPage';
import RegistrationPage from './pages/RegistrationPage';
import CoursesPage from './pages/CoursesPage';
import Footer from './components/Footer';
import ProgrammingToolsPage from './pages/ProgrammingToolsPage';
import HttpClient from './services/HttpClient';
import { AppProvider, useAppContext } from './AppContext';

function AppContent() {
  const { dispatch, state } = useAppContext();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const data = await HttpClient.get('/users/1'); // Імітація поточного користувача
          dispatch({ type: 'SET_USER', payload: data });
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchCurrentUser();
  }, [dispatch]);

  const memoizedRoutes = useMemo(() => (
    <Routes>
      <Route path="/" element={<ForumPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      {state.user?.role === 'admin' && (
        <Route path="/forum/new" element={<AddPostPage />} />
      )}
      <Route path="/question/:id" element={<QuestionDetailPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="/edit-post/:id" element={<EditPostPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/programming-tools" element={<ProgrammingToolsPage />} />
    </Routes>
  ), [state.user]);

  return (
    <Router>
      <div className="wrapper">
        <header className="bg-secondary text-white shadow-md">
          <nav className="navbar flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
            <a href="/" className="text-lg font-bold">Forum</a>
            <div>
              <a href="/login" className="text-white hover:text-primary mx-2">Login</a>
              <a href="/register" className="text-white hover:text-primary mx-2">Register</a>
              {state.user?.role === 'admin' && (
                <a href="/forum/new" className="text-white hover:text-primary mx-2">Add Post</a>
              )}
              <a href="/courses" className="text-white hover:text-primary mx-2">Courses</a>
              <a href="/programming-tools" className="text-white hover:text-primary mx-2">Programming Tools</a>
            </div>
          </nav>
        </header>
        <main className="main container mx-auto p-6">
          {memoizedRoutes}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
