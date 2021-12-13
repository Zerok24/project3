import React from 'react';
import "./styles/Preview.css" ;
import {Link} from 'react-router-dom';
import {Like} from "./Like";

export function Preview(props){

    const {title,author, id, likes} = props;
    
    let lastTitle = title.length > 11  ?
                        title.substring(0,9) + "..." : title;

    return(
        <div className="container">
            <Link to = {`/post/${id}`} >
                <div className= "left" >
                        <h1 id='pre-title'>{title}</h1>
                        <h1 id="short-title">{lastTitle}</h1>
                        <p id='author'>by {author} </p>
                </div>
            </Link>
            <div className="right">
                <Like likes = {likes} id={id}></Like>
            </div>
        </div>
    );
}