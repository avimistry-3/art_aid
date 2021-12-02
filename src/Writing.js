import React from "react";
import './writing.css';
import w1 from './image/wt1.jpg'

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function Writing() {
  // State to store uploaded file
  /**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
      <div>
          <div className="wt1">
            <h1>What is Poetry Therapy?</h1>
            <div className="div1">
            <p>Poetry therapy is the use of language, symbol, and story in therapeutic, educational, growth, and community-building capacities. It relies upon the use of poems, stories, song lyrics, imagery, and metaphor to facilitate personal growth, healing, and greater self-awareness. Bibliotherapy, narrative, journal writing, metaphor, storytelling, and ritual are all within the realm of poetry therapy.</p>
            </div>
            <div className="div1">
            <img src={w1}/>
            </div>
          </div>
        <div className="upload-box">
          <p>Upload your written collection. Poetry, short story or essay </p>
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <ImageThumb image={file} />}
        </div>
    </div>
  );
}




export default Writing ;
  