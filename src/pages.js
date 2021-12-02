import React from "react";
import{NavLink, useLocation, Outlet} from "react-router-dom";
import './navbar.css';
import headimg from './image/img1.jpg';
import {Profile} from './Profile.js'
//import {NavLink,Nav,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

export function Home(){
    return(
        <div>
            
            <nav className='nav-style'  bg='light' expand='lg'>
                <NavLink className='home' to='/'>Art Aid</NavLink>
                <NavLink className='nav1'  to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" >Book</NavLink>
                <NavLink className='nav3' to="/Chat" >Chat</NavLink>
                <NavLink className='nav4' to="/Task" >Task</NavLink>
                <NavLink className='nav5' to="/Slot" >Slot</NavLink>
                <NavLink className='nav6' to="/About" >About</NavLink>
                <NavLink className='nav7' to="/Faq" >FAQ</NavLink>

            </nav>
            <img src={headimg}/>        
            
            <div className='div2'>
                    <p style={{textAlign:'center', fontWeight:'bold'}}>Let clients schedule therapy appointments online with ease</p>
                    <p style={{textAlign:'center'}}>With Art Aid clients can schedule appointments in just seconds at any convenient time. The schedule allows you to add therapist, also offer different services in one schedule. Would you like to synchronize your online appointment schedule with your private agenda to make sure no therapy appointments can be booked when you have a private appointment? No problem ..................    
                    We are here!</p>
            </div>
            
        </div>
        
    );
}





  


export function Slot(){
    return(
        <div>
            <nav className='nav-style'  bg='light' expand='lg'>
                <NavLink className='home' to='/' >Art Aid</NavLink>
                <NavLink className='nav1'  to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" >Book</NavLink>
                <NavLink className='nav3' to="/Chat" >Chat</NavLink>
                <NavLink className='nav4' to="/Task" >Task</NavLink>
                <NavLink className='nav5' to="/Slot" >Slot</NavLink>
                <NavLink className='nav6' to="/About" >About</NavLink>
                <NavLink className='nav7' to="/Faq" >FAQ</NavLink>

            </nav>
            <h1> Manage Slot</h1>
        </div>
    );
}

    

export function N404(){
    let location = useLocation;
    console.log(location);
    return(
        <div>
            <h1>Page Not Found at !!!</h1>
        </div>
    );
}

