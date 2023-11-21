import {  Routes, Route, NavLink } from 'react-router-dom';

import Home from "./views/pages/Home";
import Story from "./views/pages/story";
import Contact from './views/pages/contact';
import Service from './views/pages/service';
import Navbar from './views/components/Navbar';


const App = _ =>{
  return (
    <div className='container'>
      <Navbar/>

      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>



      </Routes>
    </div>
  )
}

export default App;