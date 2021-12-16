import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Digi<span className="text-primary">Gram.</span></NavLink>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                            <li className="nav-item ">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" >Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link" >News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
                            </li>
                        </ul>

                        <div className="ml-auto">
                            <a to="#" className="btn btn-outline rounded-pill">Get a Quote</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
