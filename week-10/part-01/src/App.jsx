import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
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
  return (
    <div>
      This is class 11th program
    </div>
  )
}

export default App
