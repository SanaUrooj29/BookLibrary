import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Book Library</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/books" className="hover:underline">Books</Link></li>
          <li><Link to="/favorites" className="hover:underline">Favorites</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar