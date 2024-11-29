import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import SearchBar from './SearchBar'
import GenreFilter from './GenreFilter'

const BookList = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [isLoading, setIsLoading] = useState(true)

  const genres = [...new Set(books.map((book) => book.genre))]

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      let result = [...books]

      if (searchTerm) {
        result = result.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      if (selectedGenre) {
        result = result.filter((book) => book.genre === selectedGenre)
      }

      result.sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating
        if (sortBy === 'year') return b.year - a.year
        return a.title.localeCompare(b.title)
      })

      setFilteredBooks(result)
      setIsLoading(false)
    }, 500)
  }, [books, searchTerm, selectedGenre, sortBy])

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>
      {isLoading ? (
        <p className="text-center">Loading books...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BookList