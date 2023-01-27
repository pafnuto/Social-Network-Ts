import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header';
import { Nav } from './components/nav/nav'

function App() {
  return (
<div className="app">
  <Header />
  <div className="body">
    <Nav/>
    <div className="container">
    </div>
  </div>
</div>
  )
}

export default App
