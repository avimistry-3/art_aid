import React from "react";
import { NavLink, nav } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { useState,useRef } from "react";
import './faq.css';

function FAQ(){
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return(
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
             <div className="faq1">
             <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is Art Aid?</Accordion.Header>
    <Accordion.Body>
      Art Aid provides art therapy to clients from the convinience of your home. Your personal information is secure with us.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Who will be helping me?</Accordion.Header>
    <Accordion.Body>
    After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How are therapists verified?</Accordion.Header>
    <Accordion.Body>
    Our team ensures that every provider we bring to the platform is fully licensed and in good standing. Providers who apply are required to provide proper licensure documentation and proof of identity. We then cross-check their licensure information with their respective state licensing board.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>How long until I am matched with therapists?</Accordion.Header>
    <Accordion.Body>
    This process can take a few hours or a few days, depending on therapist availability. Don't worry, your subscription period starts when you are matched with a therapist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>How can I communicate with therapist?</Accordion.Header>
    <Accordion.Body>
      You can communicate through chat feature of the app.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>How can I access my tasks?</Accordion.Header>
    <Accordion.Body>
      The tasks are mentioned under the tasks sections. You can access different tasks from there as suggested by your therapists.
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
</div>
    </div>
  );
        }

export default FAQ;