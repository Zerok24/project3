import './styles/App.css';
import React from 'react'
import { Post } from './Post';
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home  from './Home';
import { Create } from './Create';


function App() {
  
  return(
    <div className='app-container'> 
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
    </div>
  );

}

export default App;
