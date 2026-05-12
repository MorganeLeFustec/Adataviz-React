import { useState } from 'react'
import './App.css'

function Mydisplay(){
  return (
    <button>Click encore</button>
  )
}

function App() {
  const [display, setDisplay] = useState(false)
  return (
    <>
    <button onClick={() => setDisplay(!display)}>Click</button>
    {display &&
    <Mydisplay/> }
    <button>Click 2</button>
    </>
  )
}

export default App
