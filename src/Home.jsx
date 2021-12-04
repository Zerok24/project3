import React from 'react';
import { useSelector } from 'react-redux';
import { Preview } from './Preview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllData } from './actions';


export default function Home(props){

    // const {data} = props;
    // // console.log(data);

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);
    
    const reduxData = useSelector(state => state);


    console.log(reduxData);

    // console.log("here");
    return(

        <div>
            {reduxData.map((elem) => {
                // console.log(elem);
                return(
                    <Preview title = {elem.title} author = {elem.author} id = {elem.id} likes={elem.likes}/>
                );
                  
            })}
 
        </div>
    );

}