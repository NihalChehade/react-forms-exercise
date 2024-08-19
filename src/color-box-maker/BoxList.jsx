import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as UUID} from 'uuid';
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = ({ color, width, height }) => {
    setBoxes([...boxes, {id:UUID(), color, width, height }]);
  };
  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  return (
    <div>
      <div>
      {boxes.map((box) => (
        <Box 
        id={box.id}
        key={box.id}
        color={box.color} 
        width={box.width} 
        height={box.height} 
        removeBox={removeBox}
        />
      ))}
      </div>
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
