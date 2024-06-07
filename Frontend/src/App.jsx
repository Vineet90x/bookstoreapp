import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup';
import Contactus from './contactus/Contactus';
import Aboutus from './aboutus/Aboutus';

function App() {
  return (
    <>
    <div className=' dark:bg-black dark:text-white'>
    <Routes>
    <Route path = '/' element = {<Home/>} />
    <Route path = "/course" element = {<Courses/>} />
    <Route path = "/signup" element = {<Signup/>} />
    <Route path = "/contact" element = {<Contactus/>} />
    <Route path = "/about" element = {<Aboutus/>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
