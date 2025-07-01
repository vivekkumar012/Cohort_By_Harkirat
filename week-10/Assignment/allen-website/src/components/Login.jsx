import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword]  = useState("")
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 h-screen text-white'>
      <header className='flex items-center justify-between'>
        <div className='flex flex-row items-center space-x-4 p-6'>
            <Link to={"/"} className='text-2xl font-bold'>ALLEN</Link>
            <ul className='flex flex-row space-x-6 text-xl'>
                    <li>Exams</li>
                    <li>Programs</li>
                    <li>Scolarships</li>
                    <li>TestSeries</li>
                    <li>StudyMaterial</li>
            </ul>
        </div>
        <div className='space-x-4'>
            <button className='text-black px-4 py-2 bg-white rounded rounded-full hover:bg-blue-600 font-semibold'>talk to us</button>
            <Link to={"/signup"} className='text-black bg-transparent rounded rounded-full hover:bg-gray-500 py-2 px-4 border border-black font-semibold mr-2'>Signup</Link>
        </div>
      </header>
      <div className='flex items-end justify-center'>
       <div className='w-[500px] rounded-lg shadow-lg bg-gray-900 mt-20 p-8'>
            <h1 className='text-2xl font-semibold flex items-center justify-center mb-4'>Welcome to <span className='text-2xl text-blue-600'>ALLEN</span></h1>
            <p className='text-gray-400 text-xl flex items-center justify-center mb-4'>Login to see the Courses</p>
      
            <form>
                <div className='mb-4'>
                    <label htmlFor="email">Enter Your Email</label>
                    <input 
                    type='text'
                    id='email'
                    placeholder='Enter your email'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className='w-full bg-gray-500 px-4 py-2 focus:ring-2 focus:ring-blue-700 focus:outline-none'
                    required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password">Enter Your Password</label>
                    <input 
                    type='text'
                    id='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-gray-500 px-4 py-2 border border-gray-800 focus:ring-2 focus:ring-blue-700 focus:outline-none'
                    required
                    />
                </div>
                <button className='w-full py-2 px-4 hover:bg-blue-500 bg-slate-600 rounded-md'>
                    Login
                </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login
