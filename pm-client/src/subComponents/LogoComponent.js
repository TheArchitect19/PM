import React from 'react'
import styled from 'styled-components'




const Logo = styled.h1`
display: inline-block;
color:#ffffff;
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 0.3rem;
z-index: 3;
`

export const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      PM
    </Logo>
  )
}
