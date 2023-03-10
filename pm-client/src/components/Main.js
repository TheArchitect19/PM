import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { LogoComponent } from '../subComponents/LogoComponent'
import { SocialIcons } from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import { Intro } from './intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top:2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top:50%;
right: calc(1rem + 2vw);
transform:translate(-50%,-50%);
transform: rotate(90deg);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top:50%;
left: 1.5rem;
transform:translate(-50%,-50%);
transform: rotate(270deg);
text-decoration: none;
z-index:1;
`
const BottomBar = styled.div`
position:absolute;
bottom: 1rem;
left:0;
width:100%;

display: flex;
justify-content:space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};

text-decoration: none;
z-index:1;
`
const rotate = keyframes`
from{
  transform: rotateY(0);
}
to{
  transform: rotateY(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%' };
left: ${props => props.click ? '92%' :'50%' };
transform: translate(-50%,-50%);
border:none;
outline:none;
background-color: transparent;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.8s linear;
}

&>:last-child{
  display: ${props => props.click ? 'none' :'inline-block' };
  padding-top: 1rem;
}
`

const DarkDiv = styled.div`
 position:absolute;
 top:0;
 background-color: #FFE7D7;
 bottom:0;
 right:50%;
 width: ${props => props.click ? '100%' :'0%' };
 height: ${props => props.click ? '100%' :'0%' };
 z-index:1;
 transition: height 0.5s ease, width 1s ease 0.5s;
`

export const Main = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
  
    <DarkDiv click={click}/>
       <Container>
          <LogoComponent theme={click ? 'dark' : 'light'} />
          
          <SocialIcons theme={click ? 'dark' : 'light'} />
          <Center click={click} >
             <YinYang   onClick={()=> handleClick()} width={click ? 100:180} height={click ? 100:180} fill='currentColor' />
             <span>click here</span>
             </Center>

          <Contact target="_blank" to={{pathname:"mailto:anuragjee2020@gmail.com"}}>
             <motion.h3 
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             >Connect</motion.h3>
          </Contact>

          <BLOG to="/services">
             <motion.h3
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             >Services</motion.h3>
          </BLOG>

          <WORK to="/blog" >
             <motion.h3
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             >Blogs</motion.h3>
          </WORK>
          
          <BottomBar>
             <ABOUT to="/about" >
               <motion.h3
               whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
               >About Us</motion.h3>
             </ABOUT>
             <SKILLS to="/register">
               <motion.h3
               whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
               >Register</motion.h3>
             </SKILLS>
          </BottomBar>
       </Container>
       {click ? <Intro  click={click}/> : null}
    </MainContainer>
  )
}

