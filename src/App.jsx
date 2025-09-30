import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// States demo
// States are not persistent across page reloads
const Card = ({ title }) => {
  // add a "Liked" state
  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div className="card" >
      <h2>{title}</h2>

      // liked toggle
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

// if liked was passed as a Prop, cards would not be able to have an individual liked value

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
