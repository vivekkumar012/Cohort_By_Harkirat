import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  return (
      
    
    <BrowserRouter>
      <Link to='/'>ALLEN</Link>
      <Link to='/neet/class-11'>Class-11</Link>
      <Routes>
        <Route path='/neet/class-11' element={<Class11Program />} />
        <Route path='/' element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Index() {
  return(
    <div>
      Welcome to Allen
    </div>
  )
}
function Class11Program() {
  const navigate = useNavigate();

  function handle() {
    navigate("/")
  }
  return (
    <div>
      This is class 11th program
      <button onClick={handle}>Click to go home page</button>
    </div>
  )
}

export default App
