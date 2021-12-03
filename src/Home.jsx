import React from 'react';
import { Preview } from './Preview';


export function Home(props){

    const {data} = props;
    console.log(data);
    return(

        <div>
            
            {data.map((elem) => {

                return(
                    <Preview title = {elem.title} author = {elem.author} id = {elem.id} likes={elem.likes}/>
                );
                  
            })}
 
        </div>
    );

}