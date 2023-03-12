import React from 'react'
import styled, {keyframes, ThemeProvider} from 'styled-components'
import {lightTheme} from './Themes'
import { motion } from 'framer-motion'
import { PowerButton } from '../subComponents/PowerButton'
import {MovingComponent} from 'react-moving-text';
import {LogoComponent} from '../subComponents/LogoComponent';
import { createGlobalStyle } from "styled-components";
import {SocialIcons} from '../subComponents/SocialIcons';
import { Card } from './card'
import { Card1 } from './card1'
import { Card2 } from './card2'
import { Card3 } from './card3'
import { Card4 } from './card4'
import { Card5 } from './card5'


const Box = styled.div`
background-color: #131416;
width:100vw;
height: 100vh;
position: relative;
overflow:hidden;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width:100vw;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;

`





const SERV = styled.div`
  display:grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding:4.5rem;
  margin-left:10%;
  @media(width<900px){
    grid-template-columns: 1fr 1fr ;

}
@media(width<450px){
   
  grid-template-columns: 1fr ;
  padding:2.5rem;


}
`
const ABOUT = styled.div`
 display:flex;
 margin-top:6%;
 color: #F8B13C;
 justify-content:center;
   align-items:center;
 font-size: 4rem;
 font-weight:700;
 
  background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;


@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 600px;
  }
  100% {
    background-position: 700px;
  }
}
 @media(width<450px){
   margin-top:29%;
   font-weight:700;
   font-family: 'Source Sans Pro', sans-serif;
   
   justify-content:center;
   align-items:center;
   font-size: 3.2rem;
}
`

export const BlogPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box >
      <PowerButton />
        <LogoComponent />
        <SocialIcons />        
        <MovingComponent
  type="popIn"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
  <ABOUT>
            SERVICES
        </ABOUT>
</MovingComponent>
      <SERV>
       <Card />
       <Card1 />
       <Card2 />
       <Card3 />
       <Card4 />
       <Card5 />
      </SERV>
        
      </Box>
    </ThemeProvider>
  )
}
