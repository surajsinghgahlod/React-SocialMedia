import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Social-24</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/reels">Reels</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/notification">Notification</Link>
                </li>
            </ul>
            </div>
            <div className="nav-item dropdown ml-auto d-flex align-items-center justify-content-between gap-3">
                <Link className="nav-link" to="/profile">Profile</Link>
                <Link className="nav-link" to="/login">Logout</Link>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
