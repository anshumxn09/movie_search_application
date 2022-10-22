import React from 'react'
import Details from './Details'
import Home from './Home'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Details />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App