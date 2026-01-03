import React from 'react'
import Movies from './Movies'


export default function Home({handleAddToWatchlist,handleRemoveFromWatchlist,watchlist}) {
  return (<>
    <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
   
    </>
  )
}
