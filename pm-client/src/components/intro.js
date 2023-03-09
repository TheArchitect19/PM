import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ME from '../assets/Images/family-shopping.webp'
const Box = styled(motion.div)`

 position: absolute;

 left:50%;
 top:50%;
 transform: translate(-50%, -50%);
 width: 60vw;
 height:55vh;
 display:flex;


 background: linear-gradient(
  to right,
  ${props => props.theme.text} 50%,
  #FFE7D7 50%) bottom,
  linear-gradient(
  to right,
  ${props => props.theme.text} 50%,
  #FFE7D7 50%) top;
  
  background-repeat: no-repeat;
  background-size: 100% 3px;
  border-left: 3px solid ${props => props.theme.text};
  border-right: 3px solid  #FFE7D7;
  
  z-index:1;
`
const SubBox = styled.div`
width:50%;
position: relative;
display:flex;

.pic{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform:translate(-50%,0%);
  width:100%;
  height: auto;
}
@media(width<900px){
  .pic{
    display:none;
  }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
@media(width<900px){
  font-size: 2em;
}
@media(width<600px){
  font-size: 1.5em;
}
@media(width<450px){
  font-size: 1em;
}
color: ${props => props.theme.text};
padding: 2rem;
cursor: pointer;

display:flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
   font-size: calc(0.5rem + 1.2vw);
    font-weight:300;
}
`


export const Intro = () => {
  return (
    <Box 
    initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{type:'spring',duration:2,delay:1}}>
       <SubBox>
           <Text>
            <h1>Welcome,</h1>
            <h3>To Pandri Market</h3>
            <h6>We provide simple yet effective solutions to your marketing problems</h6>
           </Text>
       </SubBox>
       <SubBox>
        <motion.div
        initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:2}}>
          <img className='pic' src={ME} alt='PM' />
        </motion.div>
       </SubBox>
    </Box>
  )
}
