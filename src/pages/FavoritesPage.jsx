// src/pages/FavoritesPage.jsx
import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { booksData } from '../data/booksData';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
    const filteredBooks = booksData.filter((book) => storedFavorites.includes(book.id));
    setFavoriteBooks(filteredBooks);
  }, []);

  const toggleFavorite = (bookId) => {
    const newFavorites = favorites.filter((id) => id !== bookId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavoriteBooks(favoriteBooks.filter((book) => book.id !== bookId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Favorite Books</h1>
      {favoriteBooks.length > 0 ? (
        <BookList books={favoriteBooks} onToggleFavorite={toggleFavorite} favorites={favorites} />
      ) : (
        <p>You haven't added any favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;