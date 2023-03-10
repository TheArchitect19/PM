import React from 'react'
import styled, {keyframes, ThemeProvider} from 'styled-components'
import {lightTheme} from './Themes'
import { motion } from 'framer-motion'
import { PowerButton } from '../subComponents/PowerButton'

import {LogoComponent} from '../subComponents/LogoComponent';
import {SocialIcons} from '../subComponents/SocialIcons';

import IMG from '../assets/Images/manager.png'
import IMG1 from '../assets/Images/about-bg.jpg'

const Box = styled.div`
background-color: ${props => props.theme.body};
width:100vw;
height: 100vh;
position: relative;
overflow:hidden;
background-image: url(${IMG1});

background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width:100vw;
height:100vh;
`

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`

const Manager = styled.div`
 position:absolute;
 top: 10%;
 right:5%;
 width:26vw;
 animation: ${float} 4s ease infinite;
 img{
  width:100%;
  height:auto;

 }
`
const ABOUT = styled.div`
 position:absolute;
 top:20%;
 left:6%;
 color:	#1A1919;
 font-size: 5rem;
 font-weight:700;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height:60vh;
z-index:3;
line-height: 1.5;

display:flex;
justify-content: center;
align-items: center;
font-size: calc(0.5rem + 0.8vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubutntu Mono',monospace;
font-style: italic;
`

export const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box >
      <PowerButton />
        <LogoComponent/>
        <SocialIcons />
        <ABOUT>
            ABOUT US
        </ABOUT>
        {/* <ParticleComponent theme='dark' /> */}
        <Manager>
          <img src={IMG}alt="manager" />
        </Manager>
        <Main >
        <motion.div 
        initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:1}}
        >
        Pandri Market Private Limited is an online fragment of the already existing came into
existence in 2021 and was established by founding members Jaya Agrawal & Rahul Kumar
Agrawal to revolutionise the dynamics of selling and buying in local markets. <br></br> It is a
hyper-local online platform, allowing consumers and local merchants to connect and interact.
<br></br>
Their main aim is to help small and medium businesses (SMBs) retailers, wholesalers,
boutique owners, designers, artisans, local tribals of Chhattisgarh as well as with young
entrepreneurs by providing them with a digital platform to sell their products and have a
constant source of income irrespective of the market situation and future pandemics.
</motion.div>
        </Main>
      </Box>
    </ThemeProvider>
  )
}
