import React  from 'react'
import Home  from './pages/Home'

import {Routes,Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Car from './components/Car'

const App=()=>{
  const [displayCar] = useState(0)
  
  return(
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cars" element={<Car/>} />
        <Route path="/blogs/:id" element={<Car/>} />
      </Routes>
  )
}
export default App;