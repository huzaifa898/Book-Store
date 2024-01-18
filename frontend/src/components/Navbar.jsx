import React from 'react'

const Navbar = () => {
  return (
    <div  style={{borderbottom:"1px solid white"}}>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Book Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">BOOKS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">ADD BOOKS</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
