import React from 'react';
import Marquee from "react-fast-marquee";
import { SectionWrapper } from "../hoc";
import { projecti } from "../constants";

const ProjectCard = ({
    name,
    image,
  }) => {
    return (
        <div className='px-5 mt-3' styles={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
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
                  s >
          {projecti.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} /> 
          ))}
          </Marquee>
      </>
    );
  };
  
  export default Sponsors;
  
