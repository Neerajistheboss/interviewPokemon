import React, { useEffect, useState } from 'react'
import PokeCard from '../Components/PokeCard'

import axios from 'axios'

const HomePage=()=>{
    const [pokemonList,setPokemonList]=useState([])

    const [page,setPage]=useState(1)
    const [size,setSize]=useState(10)
    

    //function to check whether bottom of page about to reach
    const checkBottom=()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPage(page+1)  // bottom reached , increase page no. to fetch more data
         }
    }

 
    useEffect(()=>{
        window.addEventListener('scroll',checkBottom)
    })
    


    useEffect(()=>{
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${size}`)
             .then(response=>setPokemonList([...pokemonList,...response.data.data]))
    },[page,size]) // dependecy on page no. and size.

    return(
        <div className='px-5' style={{backgroundColor:'#67EDFF'}}>
            <div className='row align-items-stretch'>
            {pokemonList.map(pokemon=><PokeCard pokemon={pokemon}/>)}        
            </div>
        </div>
    )
}


export default HomePage