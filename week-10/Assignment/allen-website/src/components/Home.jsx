import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/allen.webp"

function Home() {
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 h-screen text-white p-4 items-center'>
      {/* Navbar */}
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
            <Link to={"/login"} className='text-black bg-transparent rounded rounded-full hover:bg-gray-500 py-2 px-4 border border-black font-semibold mr-2'>login</Link>
        </div>
      </header>
      {/* Navbar */}
      <section className='mt-4'>
        <div className='flex justify-between mt-8'>
            <div className='items-center mb-4 justify-center'>
                <h1 className='font-bold text-2xl'>Online Programs</h1>
                <p className='w-[500px] font-sarif tracking-normal'>ALLEN Career Institute, a trusted name in competitive exam coaching for over three decades, brings its proven pedagogy to your fingertips with ALLEN Online Courses. Designed for students preparing for JEE (Main + Advanced), NEET-UG, Olympiads, and Class 6–12 Board Exams, these online programs combine expert faculty, structured study material, and smart technology to ensure holistic learning from the comfort of your home.</p>
            </div>
            <div>
                <img className='h-21 w-21 rounded rounded-lg bg-blue-950 mr-9' src={logo} alt="" />
            </div>
        </div>
      </section>
      <section className='py-3'>
        <div>
            <h1 className='font-semibold text-center text-2xl mb-4'>Discover the Perfect Online Programs</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-between '>
            <div className='w-[200px] h-[200px] bg-slate-800 flex justify-center'>
                JEE
            </div>
            <div className='w-[200px] h-[200px] bg-slate-800 flex justify-center'>
                NEET
            </div>
            <div className='w-[200px] h-[200px] bg-slate-800 flex justify-center'>
                BOARD
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
