import { useState } from 'react'
import './App.css'
import StopWatch from './Stopwatch'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StopWatch/>
    </div>
  )
}

export default App
