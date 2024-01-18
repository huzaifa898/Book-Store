import React from 'react'
import  "./Home.css"
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid justify-content-center align-items-center">
    <div className="row container">
    <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
         style={{ height: "91.5vh" }}
         > 
          <h2 style={{ fontSize: "70px" }}>BOOK STORE FOR YOU</h2>
          <button className='VeiwBook'>View Book</button>
    </div>
    <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
         style={{ height: "91.5vh" }}
         >
        <img className='img-fluid honeimg'  src='https://morganhuntereducation.com/wp-content/uploads/2017/09/iStock-623666368.jpg'/>
    </div>
    </div>
    </div>
  )
}

export default Home
