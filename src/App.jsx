import React from "react"
import {Navbar, Home, Feature, Howto, Trade, Learn, Footer} from "./components"
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/feature" element={<Feature />} />
        <Route path="/howto"  element={<Howto />}/> */}
        <Route path="/trade"  element={<Trade />}/>
        <Route path="/learn"  element={<Learn />}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
}

