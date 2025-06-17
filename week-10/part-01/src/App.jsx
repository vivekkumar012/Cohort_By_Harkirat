import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (  
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/neet/class-11' element={<Class11Program />} />
          <Route path='/' element={<Index />}/>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
function Layout() {
  return(
    <div>
      <Link to='/'>ALLEN</Link>
      <Link to='/neet/class-11'>Class-11</Link>
      <Outlet />
      Footer
    </div>
  )
}
function ErrorPage() {
  return(
    <div>
      Page not found
     <Link to='/'><button>Go to home page</button></Link>
    </div>
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
