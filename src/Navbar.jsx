import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png";


const Navbar = () => {
    return (
        <>
            

                        <nav className="navbar navbar-expand-lg navbar-dark " >
                            <div className="container">
                            <img src={logo} className="navbar-brand1" alt=""/>
                                <NavLink
                                    className="navbar-brand" to="/">
                                    Vyom Voyage
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                className="nav-link active"
                                                aria-current="page" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        

                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName='menu_active'
                                                className="nav-link" to="/research">
                                                Research
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName='menu_active'
                                                className="nav-link" to="/domain">
                                                Domain
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName='menu_active'
                                                className="nav-link" to="/about">
                                                About
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName='menu_active'
                                                className="nav-link" to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>

                        
                    
        </>
    );
};
export default Navbar;