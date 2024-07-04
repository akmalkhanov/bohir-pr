import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Newletters from './components/Newletters'
import Footer from './shared/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newletters />
      <Footer />
    </>
  )
}

export default App 