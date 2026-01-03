import React from 'react'

export default function Pagination({handlePrev,handleNext,pageNo}) {
  return (

    <div className='p-3 bg-gray-900/50 text-white p-4 mt-8 bold flex justify-center gap-5'>
        <div onClick={handlePrev} className='fa-solid fa-arrow-left p-2   '>

        </div>
        <div className='text-xl'>{pageNo}</div>
        <div onClick={handleNext} className='fa-solid fa-arrow-right p-2  '></div>
    </div>
  )
}
