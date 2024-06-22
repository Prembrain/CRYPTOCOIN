import React from "react"
import {Navbar, Home, Feature, Howto, Trade, Learn, Footer} from "./components"
import { Routes, Route, useLocation } from "react-router-dom"


export default function App() {
  const location = useLocation();

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden scroll-smooth">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/trade"  element={<Trade />}/>
        <Route path="/learn"  element={<Learn />}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
}
