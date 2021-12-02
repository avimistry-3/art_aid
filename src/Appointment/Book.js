import React, { Component } from 'react';
import '../navbar.css';
import{NavLink, useLocation, Outlet, Link} from "react-router-dom";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';


setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function App() {
  return (
      <div>
        <nav className='nav-style' bg='light' expand='lg'>
                <NavLink className='home' to='/' activeStyle>Art Aid</NavLink>
                <NavLink className='nav1' to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" activeStyle>Book</NavLink>
                <NavLink className='nav3' to="/Chat" activeStyle>Chat</NavLink>
                <NavLink className='nav4' to="/Task" activeStyle>Task</NavLink>
                <NavLink className='nav5' to="/Slot" activeStyle>Slot</NavLink>
                <NavLink className='nav6' to="/About" activeStyle>About</NavLink>
                <NavLink className='nav7' to="/Faq" >FAQ</NavLink>


            </nav>
          <Datepicker
              controls={['calendar', 'time']}
              display="inline"
          />
          
      </div>
  ); 
}


export default App;