import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  )
}

function BulbState({bulbOn}) {
  
  return <div>
      {bulbOn ? "Bulb On" : "BulbOff"}
  </div>
}

function ToggleBulbState({setBulbOn}) {
  function handle() {
    setBulbOn(c => !c)
  }
  return <div>
    <button onClick={handle}>Toggle the bulb</button>
  </div>
}

export default App
