import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./styles/Create.css";
import { useNavigate } from 'react-router-dom';


export function Create(){

    const [author, setAuthor] = useState("");
    const [title,setTitle] = useState("");
    const [post,setPost] = useState("");
    const navigate = useNavigate();


    function printer(){
        console.log(author);

        const formData = {
            firstName: author.split(" ")[0],
            lastName: author.split(" ")[1],
            title: title,
            content: post
        };

        console.log(formData);

        
        //   WORKS BUT DON'T WANT TO PUT MORE STUFF INFO IN DATABASE
        fetch("https://project2.bunguiunorales.me:8443/post",{
            body: JSON.stringify(formData),
            headers:{
                'Content-Type' : 'application/json'
            },
            method:"POST",
            
        }).then(()=>{
            navigate("/");
        });

    }

    return(

        <div>
            <form className="form-container">
                <label>Author</label>
                <input type="text" value={author} onChange= {(event)=> setAuthor(event.target.value)} />

                <label>Title</label>
                <input type="text" value={title} onChange= {(event)=> setTitle(event.target.value)} />

                <label>Post</label>
                <textarea cols="40" rows="20" type="text" value={post} onChange= {(event)=> setPost(event.target.value)}></textarea>

                <button type="button" onClick={printer} >Submit</button>

            </form>
        </div>

    );


}