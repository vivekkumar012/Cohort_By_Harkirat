
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Exam from './components/Exam'
import Programs from './components/Programs'
import Scolarship from './components/Scolarship'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/scolarship' element={<Scolarship />} />
      </Routes>
    </div>
  )
}

export default App
