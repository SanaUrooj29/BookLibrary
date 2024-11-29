// src/pages/BookDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../data/booksData';
import ReviewForm from '../components/ReviewForm';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const foundBook = booksData.find((b) => b.id === parseInt(id));
      setBook(foundBook);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleAddReview = (newReview) => {
    const updatedBook = {
      ...book,
      reviews: [...book.reviews, { id: book.reviews.length + 1, ...newReview }],
    };
    setBook(updatedBook);
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading book details...</div>;
  }

  if (!book) {
    return <div className="text-center mt-8">Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={book.coverImage} alt={book.title} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl mb-2">by {book.author}</p>
          <p className="mb-2">Year: {book.year}</p>
          <p className="mb-2">Genre: {book.genre}</p>
          <p className="mb-2">Rating: {book.rating}/5</p>
          <p className="mb-4">{book.description}</p>
          <h2 className="text-2xl font-bold mb-2">Reviews</h2>
          {book.reviews.map((review) => (
            <div key={review.id} className="mb-2">
              <p>
                <strong>{review.user}</strong> - {review.rating}/5
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4 mb-2">Add a Review</h3>
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;