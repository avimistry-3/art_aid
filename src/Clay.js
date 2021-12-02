import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './clay.css';
import ReactPlayer from "react-player";
import clay1 from './image/clay1.jpg';
import clay2 from './image/clay2.jpg';
import clay3 from './image/clay3.jpg';
import clay4 from './image/clay4.jpg';
import clay5 from './image/clay5.jpg';
import clay6 from './image/clay6.jpg';
import clay7 from './image/clay7.jpg';

function Clay ()  {
  return (
    <div>
      <div className="clay-1">
      <h1>Try your hands on some clay art</h1>
      <p>Clay is one medium that promotes creativity. It is especially beneficial to young people – it helps promote self-confidence, encourages self-expression, and develops problem-solving skills. Noam Zimin, the founder of Clay Dance Studio in Siskiyou County, states, “I believe few art mediums kindle growth and skills in children the way clay does.”</p>
     
      </div>
      <div className="clayh2">
      <h2 style={{textAlign:"center"}}>Some clay works by our clients</h2>
      </div>
      <Carousel interval={1000}>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay2}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay3}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay4}
      alt="fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay5}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay6}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="clay-img"
      src={clay7}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
<div className="ytvideo">
    <h3>Tutorial for clay art</h3>
      <ReactPlayer
        url="https://youtu.be/eqnEsQhrQz8"
      />
    </div>
      </div>
  )
}
export default Clay;