import React from 'react'
import styled from 'styled-components'




const Logo = styled.h1`
display: inline-block;
color:#000000;
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

export const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      PM
    </Logo>
  )
}
