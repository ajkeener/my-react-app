import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Props demo
// Each card will render a different movie title
const Card = ({ title }) => {
  return(
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <>
    <h2>Functional Arrow Component</h2>
    
    <Card title="The Birdcage" />
    <Card title="Titanic" />
    <Card title="Cloud Atlas" />
    </>
  )
}

export default App
