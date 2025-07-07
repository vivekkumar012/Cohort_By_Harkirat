import React from 'react'
import { Link } from 'react-router-dom'

function Scolarship() {
  return (
    <div>
      <div className='bg-gray-500 w-[300px] h-screen flex-col space-y-4'>
        <div>
          <Link className='text-xl text-blue-950 font-bold hover:text-black'>Bihar Scolorship</Link>
        </div>
        <div>
          <Link className='text-xl text-blue-950 font-bold hover:text-black'>UP Scolorship</Link>
        </div>
        <div>
          <Link className='text-xl text-blue-950 font-bold hover:text-black'>National Scolorship</Link>
        </div>
      </div> 
    </div>
  )
}

export default Scolarship
