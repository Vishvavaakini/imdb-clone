import './App.css'
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import { useEffect, useState } from 'react'
import Home from './components/Home'
 

function App() {
   const[watchlist,setWatchlist]=useState(()=>{
    let newStore=localStorage.getItem('movieApp')
    return newStore? JSON.parse(newStore):[]
   });
  useEffect(() => {
    localStorage.setItem('movieApp', JSON.stringify(watchlist));
  }, [watchlist]);


 

 
 
       const handleAddToWatchlist=(movie)=>{
   let newWatchlist=[...watchlist,movie]
   setWatchlist(newWatchlist)
   
    console.log(newWatchlist)
       }
       const handleRemoveFromWatchlist=(movie)=>{
   let newWatchlist=watchlist.filter((m)=>{
    return m.id!==movie.id
   })
  
   setWatchlist(newWatchlist)
    console.log(newWatchlist)
       }
 
 
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path ='/' element={<Home handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />}/> 
    <Route path ='/watchlist' element={<Watchlist watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} setWatchlist={setWatchlist}/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
