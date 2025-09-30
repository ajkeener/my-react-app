import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Styling demo
// Inline and linked style sheet
const Card = ({ title }) => {
  return(
    <div className="card" >
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <>
    <div className="card-container">
   
      <Card title="The Birdcage" />
      <Card title="Titanic" />
      <Card title="Cloud Atlas" />
    </div>
    </>
  )
}

export default App
