// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              Book Library
            </Link>
            <div>
              <Link to="/" className="text-white mr-4 hover:underline">
                Home
              </Link>
              <Link to="/books" className="text-white mr-4 hover:underline">
                Books
              </Link>
              <Link to="/favorites" className="text-white hover:underline">
                Favorites
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;