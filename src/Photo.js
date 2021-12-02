import React, { useState } from "react";
import './photo.css';

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Upload your captured images</h1>
      <div className="img-font">
      <h5>Capture the images of:</h5>
      <ul >
          <li>Tree</li>
          <li>Bird</li>
          <li>Flower</li>
          <li>Flowing Water</li>
          <li>Animal</li>
          <li>Baby</li>
      </ul>
      </div>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <div className="Image">
      <input 
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      </div>
    </div>
  );
};

export default Photo;