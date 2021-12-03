import React from 'react';
import "./Preview.css" ;
import {Link} from 'react-router-dom';
import {Like} from "./Like";

export function Preview(props){

    const {title,author, id, likes} = props;

    return(
        <div className="container">
            <div className= "left" >
                <Link to = {`/post/${id}`} >
                    <h1>{title}</h1>
                    <p>by {author} </p>
                </Link>
            </div>
            <div className="right">
                <Like likes = {likes} id={id}></Like>
            </div>
        </div>
    );
}