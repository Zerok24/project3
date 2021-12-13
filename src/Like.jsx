import React, {  useState } from 'react';
import "./styles/Like.css";

export function Like(props){

    const {likes,id} = props;

    const [stroke,setStroke] = useState("black");
    const [likeCount, setCount] = useState(likes);

    const [color, setColor] = useState("white");    

    function patcher(id){
        fetch(`https://project2.bunguiunorales.me:8443/${id}/like`, {
            method:"PATCH"
        });
    }

    function changer(){
        if(color === "red"){
            setColor("white");
            setStroke("black");
        }else{
            setColor("red");
            patcher(id);
            setCount(likeCount+1);
            setStroke("red");
            
        }
    }


    return(
        <div className="like-container">
            <div className="like-count uno">{likeCount}</div>
            <div>
                <svg className="like" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 -10 30 40" onClick={changer} stroke={stroke}  strokeWidth="3"> 
                    <path fill ={color}  d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                </svg>

            </div>

            <div className="like-count dos">{likeCount}</div>

        </div>
    );


}