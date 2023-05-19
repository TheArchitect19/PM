import React from 'react'
import NavHom from '../components/NavHom'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Catalogue from '../components/Catalogue'
import Cat from '../components/cat'
import Hero from '../components/Hero'
import Video from '../components/Video'
import Ttm from '../components/Testimonial'
import Cg from '../components/Cg'
import Git from '../components/Git'
import Pms from '../components/Pms'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
      <>
      <NavHom/>
      <Navbar2/>
      <Search />
      <Catalogue />
      <Hero />
      <Video />
      <Pms/>
      <Carousel />
      <Cat />
      <Ttm/>
      <Cg/>
      <Git/>
      <Footer/>
      </>
    )
  }
  
  export default Home