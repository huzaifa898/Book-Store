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
          <h2 style={{ fontSize: "80px", color:"red" }}>BOOK STORE </h2>
          <h2  style={{ fontSize: "50px ", color:"yellow" }}>FOR YOU</h2>
          <p className='mb-0' style={{ color: "silver", fontSize:"20px" }} >CheckOut The Books From Here</p>
          <Link to="/books" className='Book' style={{border:"1px solid white ", borderRadius:"5px"}}>View Book</Link>
    </div>
    <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
         style={{ height: "91.5vh" }}
         >
        <img  className='img-fluid honeimg'  src='https://img.freepik.com/free-photo/portrait-young-plus-size-woman-enjoying-free-time-reading-book-while-standing-against-yellow-space-lifestyle-concept_58466-12001.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1698796800&semt=ais' alt='/'/>
    </div>
    </div>
    </div>
  )
}

export default Home
