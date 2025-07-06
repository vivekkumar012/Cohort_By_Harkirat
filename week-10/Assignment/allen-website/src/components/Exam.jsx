import React from 'react'
import { Link } from 'react-router-dom'

function Exam() {
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 h-screen'>
      <div className='flex items-center justify-between p-6'>
      <div className='w-[300px] h-[100px] p-2 bg-gray-600 flex justify-center items-center shadow-md'>
        <Link to={"https://jeemain.nta.nic.in/"} className='text-white font-bold hover:text-blue-500'>JEE MAINS</Link>
      </div>
      <div className='w-[300px] h-[100px] p-2 bg-gray-600 flex justify-center items-center'>
        <Link to={"https://jeeadv.ac.in/"} className='text-white font-bold hover:text-blue-500'>JEE ADVANCED</Link>
      </div>
      <div className='w-[300px] h-[100px] p-2 bg-gray-600 flex justify-center items-center'>
        <Link to={"https://jeemain.nta.nic.in/"} className='text-white font-bold hover:text-blue-500'>NEET</Link>
      </div>
      </div>

      <div className='flex items-center justify-center py-9'>
        <Link to={"/"} className='text-white rounded-md px-4 py-2 bg-slate-500 hover:bg-blue-600 hover:text-white'>Go to home</Link>
      </div>

    </div>
  )
}

export default Exam
