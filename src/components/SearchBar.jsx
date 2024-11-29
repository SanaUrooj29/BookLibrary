const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    )
  }
  
  export default SearchBar