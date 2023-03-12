import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'


const Icons = styled.div`
display:flex;
flex-direction: column;
@media(width<700px){
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    width:100%;
}

position:absolute;
bottom: 0;
left: 2rem;
z-index:3;

&>*:not(:last-child){
    margin: 0.4rem 0;
}
`
const Line = styled.span`
width:2px;
height: 5rem;
background-color: #ffffff;
margin-bottom:6px;
@media(width<700px){
    display:none;
}
`

export const SocialIcons = (props) => {
  return (
    <Icons>
        
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to='/'>
                <Twitter  width={25} height={25} fill="#ffffff"/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to='/'>
                <Facebook  width={25} height={25} fill="#ffffff" />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank"  to='/'>
                <YouTube width={25} height={25} fill="#ffffff" />
            </NavLink>
        </div>

        <Line color={props.theme}/>
    </Icons>
  )
}

