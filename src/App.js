import './styles/App.css';
import React, { useState, useEffect } from 'react'
import { Post } from './Post';
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home  from './Home';
import { Create } from './Create';


function App() {
  
  const [data, setData] = useState([]); 
  const [loading, setLoad] = useState(false);

  useEffect( ()=>{

    async function getData(){

      setLoad(true);

      const result = await fetch("https://project2.bunguiunorales.me:8443/posts");
      const convert = await result.json();
      
      setData(convert);
      setLoad(false);

    }
    getData();

  }, []);


  if(loading){
    return(
      <div>Loading</div>
      );
  }else{
    return(
      <div> 
          {/* <Router> */}
            <Navbar/>
            <Routes>
              <Route path = "/" element = {<Home/>}></Route>
              <Route path="/post/:id" element={<Post data={data}/>} />
              <Route path="/create" element={<Create/>} />
            </Routes>
          {/* </Router> */}
      </div>
    );
  }

}

export default App;
