import React from 'react'
import Main from './components/main/Main'
import Navmenu from './components/navmenu/Navmenu'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'

function App() {
  return (
    <>
      <Navmenu />
      <Main />
      <About />
      <Projects />
      <Skills />
    </>
  )
}

export default App
