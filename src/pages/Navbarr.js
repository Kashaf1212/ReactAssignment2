import React from 'react'
import '../csscomponents/navbar.css'
 import { Link } from 'react-router-dom'

function Navbarr() {
  return (
    <div>
  <nav>
    
    <div className='container'>
     <div className='navbar'>
      <h1>.<span>L</span>O<span>G</span>O</h1>
        <ul>
         <Link to={'/navbar'} > <li> <a href=''>Home </a></li></Link>
          <Link to={'/cards'}><li><a href='Cards'>Services</a></li></Link>
         <Link to={'/footer'}> <li><a href='footer'>About</a></li></Link>
         <Link to={'/contact'}> <li><a href='footer'>Contact</a></li></Link>
          <li><a href=''>Portfolio</a></li>
        </ul>
     </div>

    <div className='content'>
      <div className='head-para'>
     <h2>Best html website templates</h2>
     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
     <button>Read More...</button>
     </div>
    </div>



   </div>

  
   
   

  </nav>
    </div>
  )
}

export default Navbarr
