import React , { useEffect,useState , Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link, NavLink} from "react-router-dom";
import{ Home, Slot} from "./pages";
import {Profile} from './Profile'
import {Task} from './Task';
import Book from './Appointment/Book.js';
import { Chats } from './Chats';
import { Navbar } from 'react-bootstrap';
import DrawingArea from './Drawing/Drawing';
import FAQ from './FAQ';
import Timer from './Timer';
import  Music  from './Music';
import Photo from './Photo';
import Clay from './Clay';
import Writing from './Writing';
import { About } from './About';






function App(){
 
  return(
    <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Profile' element={<Profile/>}/>   
    <Route path='/book' element={<Book/>} />
    <Route exact path="/terminos" render={() => {window.location.href="index.html"}} />     
    <Route path='/chat' element={<Chats/>} />
    <Route path='/task' element={<Task/>} />
    <Route path='/Drawing' element={<DrawingArea/>} />
    <Route path='/Timer' element={<Timer/>} />
    <Route path='/Music' element={<Music/>} />
    <Route path='/Photo' element={<Photo/>} />
    <Route path='/slot' element={<Slot/>} />
    <Route path='/Writing' element={<Writing/>} />
    <Route path='/Clay' element={<Clay/>} />
    <Route path='/faq' element={<FAQ/>} />
    <Route path='/about' element={<About/>} />

    </Routes>
    </Router>
  );
}



export default App;
