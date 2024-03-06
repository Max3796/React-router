import React from "react"
import "./App.css"
import {Route, Routes}  from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Contact } from "./Components/Contact"
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { PageNotFound } from "./Components/PageNotFound"

const App = () =>{
  
  return(
    <>
    <Navbar/>
    {/* <Home/>
    <Contact/>
    <About/> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App;