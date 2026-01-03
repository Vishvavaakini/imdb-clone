import React, { useState,useEffect } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'
export default function Movies({handleAddToWatchlist,handleRemoveFromWatchlist,watchlist}) {
    const [movies,setMovies]=useState([])
    const [pageNo,setPage]=useState(1)
    
    const  handlePrev=()=>{
    if(pageNo===1){
        setPage(1)
    }
    else{
        setPage(pageNo-1)
    }
    }
     const  handleNext=()=>{
        setPage(pageNo+1)
    }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b7d1a11dd324612d9dca2e497b53f930&language=en-US&page=${pageNo}`).then(function(res){
console.log(res.data.results)
setMovies(res.data.results)
        })
        
    },[pageNo])   
  return (
    <>
    <div className='p-5'>
    <div className='text-center bold p-5 '>Trending Movies</div>
    <div className='flex flex-row flex-wrap justify-around  gap-3'>
   { movies.map((movie)=>{
    return(
 <MoviesCard key={movie.id} poster_path={movie.poster_path} name={movie.original_title} handleAddToWatchlist={handleAddToWatchlist} movie={movie} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
    )
   
   })}  
    
           </div>
    </div>
     <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </>
  )
}

//https://api.themoviedb.org/3/movie/popular?api_key=b7d1a11dd324612d9dca2e497b53f930&language=en-US&page=1