import React from "react";
import "./carousel1.css";


const MultiItemCarousel = () => {
  

 

  return (
    <div  className='budget3'style={{background:"transparent"}}>
      
      <Card  />
       
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div style={{width:"100%",textAlign:"center"}}>
        <h2 style={{fontWeight:"700",color:"#E53F52"}}>WARDROBE ESSENTIALS</h2>
        <h4 style={{fontWeight:"500",color:"#E53F52"}}>It’s time to refresh your closet!!</h4>
      </div>
    </>
  );
};

export default MultiItemCarousel;
