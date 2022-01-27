import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/jobs" className="navbar-item">
            Job Index
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar