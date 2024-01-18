import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div  style={{borderBottom:"1px solid white"}}>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand text-white" href="#">BOOK STORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item nav-link text-white active" to="/">
          HOME
        </Link>
        <Link className="nav-item nav-link text-white active" to="/books">
          BOOKS
        </Link>
        <Link className="nav-item nav-link text-white active" to="/addBooks">
          ADDBOOKS
        </Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
