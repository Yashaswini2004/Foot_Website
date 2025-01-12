import { useState } from 'react'
import Nav from "./component/Nav";
import "./App.css";
import HeroSection from './component/Hero';
function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
    </div>
  )
}

export default App
