
import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Location from './components/Location'
import MyLinks from './components/MyLinks'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my_links' element={<MyLinks />}/>
        </Route>
        <Route path='/location' element={<Location />} />
      </Routes>
    </>
  )
}

export default App
