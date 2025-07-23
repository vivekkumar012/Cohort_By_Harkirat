import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Home</button>
      <button>My network ()</button>
      <button>jobs ()</button>
      <button>Messages ()</button>
      <button>Notifications ()</button>

      <button>me</button>
    </>
  )
}

export default App
