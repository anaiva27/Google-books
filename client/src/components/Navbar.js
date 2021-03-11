import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <span >Google Books Search</span>
            <Link to="/search">Search</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    )
}

export default Navbar;