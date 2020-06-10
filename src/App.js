import React,{useState,useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'
import Pagination from './Pagination';


function App() {
  const [pokemon,setPokemon] = useState([])
  const [currentPageURL,setcurrentPageURL]=useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL,setnextPageURL]=useState()
  const [prevPageURL,setprevPageURL]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPageURL,{cancelToken: new axios.CancelToken(c => cancel = c)}).then(res=>{
    setLoading(false)
    setnextPageURL(res.data.next)
    setprevPageURL(res.data.previous)
    setPokemon(res.data.results.map(p=>p.name))
  })

  

  return()=>cancel()

  },[currentPageURL])
  

  if (loading) return "Loading..."

  const handleprev=()=>{setcurrentPageURL(prevPageURL)}
  const handlenext=()=>{setcurrentPageURL(nextPageURL)}


  return (
   <>
   <PokemonList pokemon={pokemon} />
   <Pagination handleprev={prevPageURL?handleprev:null} handlenext={nextPageURL?handlenext:null} />
   </>
  );
}

export default App;
