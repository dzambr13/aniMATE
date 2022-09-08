import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Pic from './components/Pic'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PicDetails from './components/PicDetails'
import pics from '../../models/pics'

const BASE_URL = 'http://localhost:3001/api'

const App = () => {
  const [picture, setPictures] = useState([])
  useEffect(() => {
    const getPics = async () => {
      const pic = await axios.get(`${BASE_URL}/pics`)
      setPictures(pic.data.pics)
    }
    getPics()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pic" element={<Pic picture={picture} />} />
          <Route path="/pic/:id" element={<PicDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
