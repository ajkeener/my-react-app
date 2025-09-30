import { useState, useEffect } from 'react'


// useEffect demo
// For tracking likes
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
  console.log(`${title} has been liked: ${hasLiked}`);
});


  return(
    <div className="card" >
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
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
