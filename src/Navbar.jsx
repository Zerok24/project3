import React from 'react';
import "./Navbar.css";
import {Link, NavLink} from 'react-router-dom';

export function Navbar(){


    return(
        <div className = "nav-container">

            <div className= "logo">
                <NavLink to={"/"}>
                    <h1>Blogger</h1>
                </NavLink>
            </div>

            <div className="options">
                <Link to={"/"}>
                 <p>Home</p>
                </Link>
                <Link to={"/create"}> 
                    <p>Create</p>
                </Link>
            </div>

        </div>
    );
}