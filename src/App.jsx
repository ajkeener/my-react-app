import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Reusable Components demo
const Card = () => {
  return(
    <div>
      <h2>Card Component</h2>
    </div>
  )
}

const App = () => {
  return (
    <>
    <h2>Functional Arrow Component</h2>
    
    <Card />
    <Card />
    </>
  )
}

export default App
