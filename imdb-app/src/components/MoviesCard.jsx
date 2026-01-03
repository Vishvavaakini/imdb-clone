import React from 'react'

export default function MoviesCard ({poster_path,name,handleAddToWatchlist,movie, handleRemoveFromWatchlist,watchlist}) {

    const isInWatchList=
        watchlist.some( m=> (movie.id===m.id))
  return (
    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}
    className='bg-cover w-[125px] h-[45vh] bg-center rounded-2xl hover:cursor-pointer hover:scale-110 duration:300 flex  flex-col justify-between items-end'>
        <div  onClick={()=> isInWatchList? handleRemoveFromWatchlist(movie):handleAddToWatchlist(movie)} className='bg-gray-900/70 cursor-pointer  rounded-xl  p-1'>{isInWatchList ? '❌':'😍'}</div>
<div className='text-white bg-gray-900/70 rounded-2xl text-center text-10px w-full   '>{name}</div>
      </div>
  )     
}
