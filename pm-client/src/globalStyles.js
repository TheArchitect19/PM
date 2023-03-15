import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
} 
h1,h2,h3,h4,h5,h6{
    display: inline-block;
} 
body{
    margin:0;
    padding:0;
    overflow:hidden;
    height:100vh;
    font-family: 'Source Sans Pro', sans-serif;
    @media(width<900px){
    overflow-y:scroll;
}

`

export default GlobalStyle;