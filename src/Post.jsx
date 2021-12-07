import React from 'react';
import "./styles/Post.css";
import { useNavigate,useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './actions';



export function Post(props){

    const params = useParams();

    const postId = Number(params.id)

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    const deleteIt = ()=>{
        fetch(`https://project2.bunguiunorales.me:8443/${postId}`, {
            method: "DELETE"
        })
        .then(()=>{
            navigate("/");
        });

    }

    const [reduxData] = useSelector(state => state);
    
    if(reduxData === undefined){
        return(
            <div>Loading</div>
            );
        }else{
            console.log(reduxData.content.split("\n"));
            return (
                
            <div className= "post-container">
                
                <h1 id="title">{reduxData.title}</h1>

                {reduxData.content.split("\n").map(elem =>{
                    return(
                        <div className = "chunks">
                            <p>{elem}</p>
                        </div>
                    )
                })}

                <button id="delete" onClick={deleteIt}>Delete</button>
            </div>
        );

    }

}