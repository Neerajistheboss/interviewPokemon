import React, { useEffect, useState } from 'react'
import PokeCard from '../Components/PokeCard'

import axios from 'axios'

const HomePage=()=>{
    const [pokemonList,setPokemonList]=useState([])

    const [page,setPage]=useState(1)
    const [size,setSize]=useState(10)
    

    const checkBottom=()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("you're at the bottom of the page");
            setPage(page+1)
         }
    }

 
    useEffect(()=>{
        window.addEventListener('scroll',checkBottom)
    })
    


    useEffect(()=>{
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${size}`)
             .then(response=>setPokemonList([...pokemonList,...response.data.data]))
    },[page,size])

    return(
        <div className='px-5 bg-primary'>
            <div className='row align-items-stretch'>
            {pokemonList.map(pokemon=><PokeCard pokemon={pokemon}/>)}        
            </div>
        </div>
    )
}


export default HomePage