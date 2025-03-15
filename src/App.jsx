import { React } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <Navbar/>
       <Banner/>
       <About/>
       <Skill/>
       <Portfolio/>
       <Testimonial/>
       <Clients/>
       <Footer/>
    </>
  )
}

export default App
