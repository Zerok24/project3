import React from 'react';
import "./Post.css";
import {useParams} from 'react-router-dom';

export function Post(props){

    const params = useParams();

    const {data} = props;

    const postId = Number(params.id)

    const filterData = data.filter(elem => elem.id === postId);
    const content = filterData[0].content.split("\n");

    console.log();

    return (
        <div className= "post-container">
            <h1 id="title">{filterData[0].title}</h1>

            {content.map(elem=> {
                return(
                    <p>{elem}</p>
                );
            })}
        </div>
    );

}