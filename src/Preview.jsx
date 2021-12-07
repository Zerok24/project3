import React from 'react';
import "./styles/Preview.css" ;
import {Link} from 'react-router-dom';
import {Like} from "./Like";

export function Preview(props){

    const {title,author, id, likes} = props;

    return(
        <div className="container">
            <Link to = {`/post/${id}`} >
                <div className= "left" >
                        <h1>{title}</h1>
                        <p>by {author} </p>
                </div>
            </Link>
            <div className="right">
                <Like likes = {likes} id={id}></Like>
            </div>
        </div>
    );
}