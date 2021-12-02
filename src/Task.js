import { NavLink, useLocation, Outlet, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import meditate from "./image/Meditating-1.jpg";
import './task.css';

export function Task() {
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
            <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Meditation</h5>
                    <p class="card-text">Relax and enjoy meditation</p>
                    <Link to="/Timer">Click Here</Link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Drawing</h5>
                    <p class="card-text">Calm yourself by drawing and painting.</p>
                    <Link to="/Drawing">Click Here</Link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Music</h5>
                    <p class="card-text">Listen to some relaxing music.</p>
                    <Link to="/Music">Click Here</Link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Photography</h5>
                    <p class="card-text">Try clicking pictures.</p>
                    <Link to="/Photo">Click Here</Link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Clay Art</h5>
                    <p class="card-text">Clay art soothes mind. Try out.</p>
                    <Link to="/Clay">Click Here</Link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Writing</h5>
                    <p class="card-text">Heal yourself through writing </p>
                    <Link to="/Writing">Click Here</Link>
                    </div>
                </div>        
            </div>
           
        </div>
    );
}