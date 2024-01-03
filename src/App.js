import React from 'react'
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skill from './Components/skills/Skill';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;




