import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"

//components
import { Main } from './components/Main'
import { AboutPage } from './components/AboutPage'
import { BlogPage } from './components/BlogPage'
import { Signup } from './components/Signup'
import { Dashboard } from './components/Dashboard'
import { FirebaseLogin } from './components/FirebaseLogin'
import AnimatedCursor from "react-animated-cursor"

import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import { PhysicalShopReg } from "./components/PhysicalShopReg"
import { Welcome } from "./components/Welcome"
import { Shops } from "./components/Shops"
import { useEffect } from "react"

function App() {
  return <>
    <GlobalStyle />
    <AnimatedCursor innerSize={12}
      outerSize={8}
      color='0,0,0'
      outerAlpha={0.2}
      innerScale={1.2}
      outerScale={10} />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-us" component={AboutPage} />
        <Route exact path="/services" component={BlogPage} />
        <Route exact path="/profile" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/shops" component={Shops} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    </ThemeProvider>
  </>

}

export default App