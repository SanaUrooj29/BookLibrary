import { useState, useEffect } from 'react'
import BookList from '../components/BookList'
import { booksData } from '../data/booksData'

const BooksPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(booksData)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book Collection</h1>
      <BookList books={books} />
    </div>
  )
}

export default BooksPage