import React from "react";
import './Congratulations.css';
import { BiLeaf } from "react-icons/bi";

const Congratulations = () => {
  return (
    <div className="congratulations-container min-h-screen h-full">
      <h1 className="congratulations-message">Congratulations!</h1>
      <div className="leaves-container">
        <BiLeaf className="leaf leaf-1" />
        <BiLeaf className="leaf leaf-2" />
        <BiLeaf className="leaf leaf-3" />
        <BiLeaf className="leaf leaf-4" />
        <BiLeaf className="leaf leaf-1" />
        <BiLeaf className="leaf leaf-2" />
        <BiLeaf className="leaf leaf-3" />
        <BiLeaf className="leaf leaf-4" />
      </div>
    </div>
  );
};

export default Congratulations;
