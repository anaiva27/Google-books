import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <p className="text-white font-weight-bold mt-3">Welcome to Book Search</p>
      <button className="nav-item btn btn-outline-secondary ml-3 mr-3">
        <Link to="/search">Search</Link>
      </button>
      <button className="nav-item btn btn-outline-secondary mb-0 mr-3">
        <Link to="/saved">Saved</Link>
      </button>
    </nav>
  );
}

export default Navbar;
