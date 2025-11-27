import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ titulo }) => {
  return (
    <header>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
              <h2 className='text-secondary'>{ titulo }</h2>
               <Link to="/" className="btn btn-outline-success">
                Home
               </Link>
               <Link to="/blog" className="btn btn-outline-success">
                Blog
               </Link>
               <Link to="/about" className="btn btn-outline-success">
                About
               </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
