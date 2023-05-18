import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Bloodavail from './components/Bloodavail'
import Donorlogin from './components/Donorlogin'
import Voluntaryblood from './components/Voluntaryblood'
import Aboutblood from './components/Aboutblood'
import Footer from './components/Footer'
import Donorsreg from './components/Donorsreg'
import Elig from './components/Elig'
import Book from './components/Book'
import Org from './components/Org'

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Donorlogin' element={<Donorlogin/>}/>
      <Route path='/Bloodavail' element={<Bloodavail/>}/>
      <Route path='/Donorlogin' element={<Donorlogin/>}/>
      <Route path='/voluntary' element={<Voluntaryblood/>}/>
      <Route path='/Aboutblood' element={<Aboutblood/>}/>
      <Route path='/donorsreg' element={<Donorsreg/>}/>
      <Route path='/elig' element={<Elig/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/organise' element={<Org/>}/>


      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
