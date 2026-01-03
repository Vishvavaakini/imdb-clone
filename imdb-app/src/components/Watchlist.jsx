import React, {  useEffect, useState } from 'react'
import genreid from '../Utility/Genre'

export default function Watchlist({watchlist,handleRemoveFromWatchlist,setWatchlist}) {
const [search,setSearch]=useState('')



const handleSearch=(e)=>{
    setSearch(e.target.value)
}
const sortDescending=()=>{
    let sorted=watchlist.sort((movieA,movieB)=>{
 return movieA.vote_average-movieB.vote_average
    })
   setWatchlist([...sorted])
}
const sortAscending=()=>{
let sorted=watchlist.sort((movieA,movieB)=>{
 return movieB.vote_average-movieA.vote_average
    })
       setWatchlist([...sorted])
}
    const [genre,setGenre]=useState(['All'])
    useEffect(()=>{
        let temp=watchlist.map((m)=>{
            return genreid[m.genre_ids[0]]
        })
        setGenre(['All',...new Set(temp)])
    
    },[watchlist])
   const[gen,setGen]=useState('All')
   const handleGen=(g)=>{
setGen(g)
 
}
   
  return (
   <>
   <div className='flex justify-center items-center'>
    {genre.map((m)=>{
        return(
            <div   onClick={()=>{handleGen(m)}}   className={gen===m? 'bg-blue-500/60 rounded-xl ml-3 w-[7rem] h-[2rem] cursor-pointer bold text-white p-1 text-center' :'bg-gray-500/60 cursor-pointer rounded-xl ml-3 w-[7rem] h-[2rem] bold text-white p-1 text-center'}>{m}</div>

    )})}
    
     

   </div>
   <div className='  mt-10 flex items-center justify-center'>
    <input  onChange={handleSearch} value={search} className='bg-gray-500/20 text-center outline-none p-1' placeholder='Search For Movies' text='name'></input>
   </div>

   <div className='mt-5 border border-gray-200'>
    <table className=' w-full  text-center border'>
        <thead>
    <tr className='border-b-2' >
        <th >Name</th>
            <th className='flex justify-center'>
              <div className='cursor-pointer p-2' onClick={sortDescending}>↑ </div>
               <div className='cursor-pointer p-2 '>Ratings</div>
                <div className='cursor-pointer p-2 ' onClick={sortAscending}>↓</div>
        </th>
           
            <th>Popularity</th>
            <th>Genre</th>
        
    </tr>
        </thead>
        <tbody>
            {watchlist.filter((m)=>{
                return(m.original_title.toLowerCase().includes(search))
            }) .filter((m)=> gen === 'All' || genreid[m.genre_ids[0]] === gen )
            .map((m)=>{
          return(
                     <tr key={m.id} className='border-b-2 p-2'>
            <td>
               <div className='flex items-center '>
                 <img  className=' ml-5 p-2 h-[5em] w-[6rem] 'src={`https://image.tmdb.org/t/p/original${m.poster_path}`}></img>
                 <div className=' ml-5 text-center'>{m.original_title}</div>
               </div>
            </td>
           
              
             <td>{m.vote_average}</td>
            
          
           
            <td>{m.popularity}</td>
            <td>{genreid[m.genre_ids[0]]}</td>
           <td onClick={()=>{handleRemoveFromWatchlist(m)}}className='text-red-300 bold  cursor-pointer'>Delete</td>
        </tr>
          )
            })}
       
        </tbody>
    </table>
   </div>
   </>
  )
}
