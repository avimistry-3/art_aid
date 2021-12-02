import React from 'react';
import { NavLink } from 'react-router-dom';
import ab from './image/ab1.jpg';
import './about.css';

export function About(){
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
            <div className="headimg">
                <img src={ab} alt="image"/>
            </div>
            <div className="ab">
            <div className="ab1">
                <h1>What is Art Therapy?</h1>
                <p>Art therapy combines the creative process and psychotherapy, facilitating self-exploration and understanding. Using imagery, colour and shape as part of this creative therapeutic process, thoughts and feelings can be expressed that wolid otherwise be difficlit to articliate.  </p>
            </div>
            <div className="ab2">
                <h1>Our Mission</h1>
                <p> Making professional therapy accessible and convenient — so anyone who struggles with life’s challenges can get help, anytime and anywhere.</p>
            </div>
            <div className="ab3">
                <h1>Services</h1>
                <ul>
                    <li>Individual Therapy</li>
                    <li>Couple Therapy</li>
                    <li>Family  Therapy</li>
                </ul>
            </div>
            </div>
        </div>
        );
    }
