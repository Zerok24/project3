import React from 'react';
import "./Post.css";
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './actions';



export function Post(props){

    const params = useParams();

    const {data} = props;

    const postId = Number(params.id)

    const filterData = data.filter(elem => elem.id === postId);
    const content = filterData[0].content.split("\n");

    const reduxData = useSelector(state => state);
    // console.log(reduxData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    return (
        <div className= "post-container">
            
            <h1 id="title">{filterData[0].title}</h1>

            {content.map(elem=> {
                return(
                    <p>{elem}</p>
                );
            })}

            hi
        </div>
    );

}