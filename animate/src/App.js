import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Pic from './components/Pic'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PicDetails from './components/PicDetails'

const BASE_URL = 'http://localhost:3001/api'

const App = () => {
  const [postPics, setPostPics] = useState([])
  const [picture, setPictures] = useState([])
  useEffect(() => {
    const getPics = async () => {
      const res = await axios.get(`${BASE_URL}/pics`)
      setPictures(res.data)
      console.log('haofhaosufh')
    }
    getPics()
  }, [])

  // const getPics = async () => {
  //   const res = await axios.get(`${BASE_URL}/pics`)
  //   setPostPics(res.data)
  // }
  // useEffect(() => {
  //   getPics()
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pics" element={<Pic picture={picture} />} />
          {/* <Route path="/pics/:id" element={<PicDetails />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
