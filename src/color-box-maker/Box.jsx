import React from "react";
import './Box.css'
const Box = ({ id, color, width, height, removeBox }) => {
  return (
    <div>
     
        <div
          className="Box"
          style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`,
          }}
        ><button className='button' type="button"  onClick={() => removeBox(id)}>
        X
      </button></div>
     
      
        
      
    </div>
  );
};

export default Box;
