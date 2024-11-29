import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 mb-2">{book.genre} - {book.year}</p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500">★ {book.rating.toFixed(1)}</span>
          <Link to={`/books/${book.id}`} className="text-blue-600 hover:underline">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard