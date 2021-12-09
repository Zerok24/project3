import React from 'react';
import { useSelector } from 'react-redux';
import { Preview } from './Preview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllData } from './actions';
import "./styles/Home.css";


export default function Home(){
    
    const dispatch = useDispatch();
    
    const isProgressing = useSelector(state => state.isProgressing);
    const reduxData = useSelector(state => state);
    console.log(reduxData);
    
    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);
    
    if(isProgressing){
        return (
            <div>loading</div>
        )
    }else{

        return(
    
            <div>
                {reduxData.data.map((elem, i) => {
                    return(
                        <Preview key = {i} title = {elem.title} author = {elem.author} id = {elem.id} likes={elem.likes}/>
                    );
                })}
     
            </div>
        );
    }

}