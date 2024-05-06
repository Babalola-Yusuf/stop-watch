import { useState } from 'react'
import './App.css'
import StopWatch from './Stopwatch'
function App() {
  const [addStopwatch, setAddStopwatch] = useState([StopWatch]);
  const handleAddStopwatch = () => {
    setAddStopwatch([...addStopwatch, StopWatch]);
  }
  return (
    <div>
      <h1>Stop Watch</h1>
      <button onClick={handleAddStopwatch}>Add StopWatch</button>
      
      {addStopwatch.map((stopwatch, index) => (
        <StopWatch key={index} />
      ))}
    </div>
  )
}

export default App
