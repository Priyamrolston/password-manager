import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex justify-center items-center p-3'>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-bold">
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </span>
        <span>- Created with</span>
        <img className="w-5" src="/heart.png" alt="" />
        <span>by Priyam</span>
      </div>
    </div>
  )
}

export default Footer