import React from "react";
import "./carousel1.css";


const MultiItemCarousel = () => {
  

 

  return (
    <div  className='budget'style={{background:"#FFEEC3"}}>
      
      <Card  />
       
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div style={{width:"100%",textAlign:"center"}}>
        <h2 style={{fontWeight:"700",color:"#E53F52"}}>JAW DROPPING OFFERS</h2>
      </div>
    </>
  );
};

export default MultiItemCarousel;
