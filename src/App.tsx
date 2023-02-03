import { useState } from 'react'
import './App.css'
import { HeaderState } from './components/header/header';
import { Nav } from './components/nav/nav';
import {Route, Routes} from "react-router-dom";
import Login  from './components/login/login';
import {profileContainer} from './components/profile/profileContainer'

function App() {
  return (
  <div className="app">
  <HeaderState />
  <div className="body">
    <Nav/>
    <div className="container">
    <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<profileContainer/>}/>
            </Routes>
    </div>
  </div>
</div>
  )
};


export default App
