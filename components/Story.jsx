import React from 'react'

function Story({img, username}) {
  return (
    <div className=''>
        <img className='h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition-all transform duration-200 ease-out' 
        src={img} alt="alt text here" />
        <p className='text-sm w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story