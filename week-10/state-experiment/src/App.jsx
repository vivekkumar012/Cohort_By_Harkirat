import { createContext, useContext, useState } from 'react'
import './App.css'

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  
  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </div>
  )
}

function LightBulb() {

  return (
    <div>
      <BulbState  />
      <ToggleBulbState />
    </div>
  )
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext) 

  return <div>
      {bulbOn ? "Bulb On" : "BulbOff"}
  </div>
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);

  function handle() {
    setBulbOn(c => !c)
  }
  return <div>
    <button onClick={handle}>Toggle the bulb</button>
  </div>
}

export default App
