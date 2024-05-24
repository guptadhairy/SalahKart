
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import BuildResume from './pages/BuildResume'
import AnalyzeResume from './pages/AnalyzeResume'
import CheckScore from './pages/CheckScore'
import FindJobs from './pages/FindJobs'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buildresume' element={<BuildResume />} />
      <Route path='/analyzeresume' element={<AnalyzeResume />} />
      <Route path='/checkscore' element={<CheckScore />} />
      <Route path='/findjobs' element={<FindJobs />} />
    </Routes>
   </Router>
  )
}

export default App