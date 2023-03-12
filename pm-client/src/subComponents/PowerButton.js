// home button 
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
border-radius: 50%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
border:none;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
cursor:pointer;

&:hover{
    background-color: rgba(248, 245, 60);
    box-shadow: 0 0 8px 3px  rgb(248, 245, 60);
}

&>*:first-child{
    text-decoration:none;
    color: inherit;
}

`

export const PowerButton = () => {
  return (
    <Power>
     <NavLink to="/">
      <PowerBtn  fill='currentColor'/>
    </NavLink>
    </Power>
  )
}

