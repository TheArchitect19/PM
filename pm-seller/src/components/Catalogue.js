import React from "react";
import Marquee from "react-fast-marquee";
// import { SectionWrapper } from "../hoc";
import { projecti } from "../constants";

const ProjectCard = ({
  name,
  image,
}) => {
  return (
    <div className='px-12 mt-3 mb-3' style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <div><img src={image} alt='project_image' style={{width:"80px"}}/></div>
      <div><h3 className='text-black font-bold' style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"12px"}}>{name}</h3></div>
    </div>
  );
};
  
const Sponsors = () => {
    
  return (
    <>
      <Marquee 
        gradient={false} 
        speed={80} 
        pauseOnHover={true}
        pauseOnClick={true} 
        delay={0}
        play={true} 
        direction="left"
        style={{background:"#F5F5F3"}} >
        {projecti.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} /> 
        ))}
      </Marquee>
    </>
  );
};
  
export default Sponsors;
  
