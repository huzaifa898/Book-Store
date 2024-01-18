import React from 'react'
import  "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
    <div className="row container ">
    <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
         style={{ height: "91.5vh" }}
         > 
          <h2 style={{ fontSize: "80px" }}>BOOK STORE </h2>
          <h2  style={{ fontSize: "50px" }}>FOR YOU</h2>
          <p className='mb-0' style={{ color: "silver" }} >CheckOut The Books From Here</p>
          <Link to="/books" className='VeiwBook'>View Book</Link>
    </div>
    <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
         style={{ height: "91.5vh" }}
         >
        <img className='img-fluid honeimg'  src='https://morganhuntereducation.com/wp-content/uploads/2017/09/iStock-623666368.jpg' alt='/'/>
    </div>
    </div>
    </div>
  )
}

export default Home
