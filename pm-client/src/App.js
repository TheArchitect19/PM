import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"

//components
import { Main } from './components/Main'
import { AboutPage } from './components/AboutPage'
import { BlogPage } from './components/BlogPage'
import { WorkPage } from './components/WorkPage'
import { MySkillsPage } from './components/MySkillsPage'
import AnimatedCursor from "react-animated-cursor"


import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

function App() {
  return <>
    <GlobalStyle />
    <AnimatedCursor  innerSize={12}
      outerSize={8}
      color='0,0,0'
      outerAlpha={0.2}
      innerScale={1.2}
      outerScale={10}/>
    <ThemeProvider theme={lightTheme}>

    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about-us" component={AboutPage}/>
      <Route exact path="/services" component={BlogPage}/>
      <Route exact path="/blog" component={WorkPage}/>
      <Route exact path="/register" component={MySkillsPage}/>
    </Switch>


    </ThemeProvider>
    </>
    
}

export default App