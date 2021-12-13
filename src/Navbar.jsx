import React from 'react';
import "./styles/Navbar.css";
import {Link, NavLink} from 'react-router-dom';

export function Navbar(){


    return(
        <div className = "nav-container">
            <div className= "logo">
                <NavLink to={"/"}>
                    <h1 id= "logo-text">Blogger</h1>
                    <h1 id= "short-logo">B.</h1>
                </NavLink>
            </div>

            <div className="options">
                <Link to={"/"}>
                 <h3 className="links">Home</h3>
                </Link>
                <Link to={"/create"}> 
                    <h3>Create</h3>
                </Link>
            </div>

        </div>
    );
}