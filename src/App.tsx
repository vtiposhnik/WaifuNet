// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import {Route, Routes} from "react-router-dom"
import Sponsors from './pages/Home/Sponsors'

function App() {
  
  return ( 
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      {/* <Route path='/genres' element={}/> */}
      <Route path='/sponsors' element={ <Sponsors />} />
    </Routes>
  </>
  )
}

export default App
