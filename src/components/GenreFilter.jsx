const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
    return (
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    )
  }
  
  export default GenreFilter