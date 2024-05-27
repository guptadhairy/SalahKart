
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import BuildResume from './pages/BuildResume'
import AnalyzeResume from './pages/AnalyzeResume'
import CheckScore from './pages/CheckScore'
import LinkedIn from './pages/LinkedIn'
import UpdateProfile from './pages/UpdateProfile'
import Settings from './pages/Settings'
import Signout from './pages/Signout'


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buildresume' element={<BuildResume />} />
      <Route path='/analyzeresume' element={<AnalyzeResume />} />
      <Route path='/checkscore' element={<CheckScore />} />
      <Route path='/linkedin' element={<LinkedIn />} />
      <Route path='/updateprofile' element={<UpdateProfile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/logout' element={<Signout />} />
    </Routes>
   </Router>
  )
}

export default App