import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted");
    }

  return (
    <div className='bg-gradient-to-r from-black to-blue-950 h-screen text-white'>
      <header className='flex items-center justify-between'>
        <div className='flex flex-row items-center space-x-4 p-6'>
            <Link to={"/"} className='text-2xl font-bold'>ALLEN</Link>
            <ul className='flex flex-row space-x-6 text-xl'>
                    <Link to={"/exam"} role='button'>Exams</Link>
                    <Link to={"/programs"}>Programs</Link>
                    <Link>Scolarships</Link>
                    <Link>TestSeries</Link>
                    <Link>StudyMaterial</Link>
            </ul>
        </div>
        <div className='space-x-4'>
            <button className='text-black px-4 py-2 bg-white rounded rounded-full hover:bg-blue-600 font-semibold'>talk to us</button>
            <Link to={"/login"} className='text-black bg-transparent rounded rounded-full hover:bg-gray-500 py-2 px-4 border border-black font-semibold mr-2'>Login</Link>
        </div>
      </header>
      <div className='flex items-center justify-center mt-20'>
      <div className='w-[500px] p-6 bg-gray-900 rounded-md shadow-sm'>
        <h1 className='font-semibold text-2xl flex items-center justify-center space-x-2 tracking-xl'>Welcome to <span className='text-blue-500'>ALLEN</span></h1>
        <p className='text-xl text-gray-400 flex items-center justify-center'>Please signup here</p>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor='firstname'>FirstName</label>
                <input 
                  type="text" 
                  id='firstname'
                  placeholder='Enter Your FirstName'
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className='w-full py-2 px-4 bg-gray-500 focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='lastname'>LastName</label>
                <input 
                  type="text" 
                  id='lastname'
                  placeholder='Enter Your LastName'
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  className='w-full py-2 px-4 bg-gray-500 focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='email'>Email</label>
                <input 
                  type="text" 
                  id='lastname'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full py-2 px-4 bg-gray-500 focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='lastname'>Password</label>
                <input 
                  type="text" 
                  id='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full py-2 px-4 bg-gray-500 focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <button className='bg-gray-400 hover:bg-blue-600 w-full px-4 py-2'>
                Signup
            </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Signup
