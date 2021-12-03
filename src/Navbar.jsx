import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';

export function Navbar(){


    return(
        <div className = "nav-container">

            <div className= "logo">
                <Link to={"/"}>
                    <h1>Blogger</h1>
                </Link>
            </div>

            <div className="options">
                <p>Home</p>
                <Link to={"/create"}> 
                    <p>Create</p>
                </Link>
            </div>

        </div>
    );
}