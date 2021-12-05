import React from 'react';
import "./Post.css";
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './actions';



export function Post(props){

    const params = useParams();

    const postId = Number(params.id)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    const [reduxData] = useSelector(state => state);
    
    if(reduxData === undefined){
        return(
            <div>Loading</div>
            );
        }else{
            return (
                
            <div className= "post-container">
                
                <h1 id="title">{reduxData.title}</h1>
                <p>{reduxData.content}</p>
            </div>
        );

    }

}