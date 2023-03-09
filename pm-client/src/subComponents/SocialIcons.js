import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'


const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;

position:fixed;
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
background-color: #000000;
margin-bottom:6px;
`

export const SocialIcons = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to='/'>
                <Github width={25} height={25} fill="#000000"/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to='/'>
                <Twitter  width={25} height={25} fill="#000000"/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to='/'>
                <Facebook  width={25} height={25} fill="#000000" />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank"  to='/'>
                <YouTube width={25} height={25} fill="#000000" />
            </NavLink>
        </div>

        <Line color={props.theme}/>
    </Icons>
  )
}

