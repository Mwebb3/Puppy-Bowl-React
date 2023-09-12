import { useState } from 'react'

import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllPuppies from './Components/AllPuppies'
import SinglePuppy from './Components/SinglePuppy'

function App() {
  

  return (
    <div>
      <h1>Puppy Bowl</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/players" element={<AllPuppies/>}/>
        <Route path="/players/:id" element={<SinglePuppy/>}/>
      </Routes>
    </div>
  )
}

export default App
