import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div> 
        <div className='flex border pl-5 pt-5 items-center space-x-10'>
       <img src='https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg' alt='' className='w-20 rounded-xl  '/>
       <Link to='/' className=' font-bold text-xl bold text-blue-400'>Movies</Link>
       <Link to='/watchlist' className='font-bold text-xl bold text-blue-400'>WatchList</Link>
</div>

    </div>
  )
}
