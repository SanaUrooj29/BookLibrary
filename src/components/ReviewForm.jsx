import { useState } from 'react'

const ReviewForm = ({ onSubmit }) => {
  const [user, setUser] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ user, comment, rating })
    setUser('')
    setComment('')
    setRating(5)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
      <div className="mb-4">
        <label htmlFor="user" className="block mb-1">Name:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-1">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block mb-1">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Submit Review
      </button>
    </form>
  )
}

export default ReviewForm