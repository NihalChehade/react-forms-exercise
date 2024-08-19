import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: "#000000",
    height: "",
    width: "",
  };

  const [box, setBox] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(box);
    setBox(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBox(() => ({
      ...box,
      [name]:value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Choose Background Color:</label>
      <input 
      type="color" 
      name="color" 
      id="color"  
      value ={box.color}
      onChange={handleChange}
      /><br/>

      <label htmlFor="width">Choose Box width:</label>
      <input 
      type="text" 
      name="width" 
      id="width"
      value ={box.width} 
      onChange={handleChange}
      /><br/>

      <label htmlFor="height">Choose Box Height:</label>
      <input 
      type="text" 
      name="height" 
      id="height"
      value ={box.height}
      onChange={handleChange} 
      /><br/>
      
      <button type="submit">Add Box!</button>
    </form>
  );
};

export default NewBoxForm;
