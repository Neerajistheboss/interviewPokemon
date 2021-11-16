import React, { useEffect, useState } from 'react'
import PokeCard from '../Components/PokeCard'

import axios from 'axios'

const HomePage=()=>{
    const [pokemonList,setPokemonList]=useState([])
    let count    //count of pokemon on particular page of api call
    let totalCount   // total count of pokemon in database
    let totalPokemonRecieved=0  //total pokemon data recieved
    const [page,setPage]=useState(1)
    const [size,setSize]=useState(10)
    

    //function to check whether bottom of page about to reach
    const checkBottom=()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // bottom reached , increase page no. to fetch more data
            totalPokemonRecieved+=(page-1)*size+count
            console.log(totalPokemonRecieved)
            if(totalPokemonRecieved<totalCount) // more pokemon data can be fetched , increase page number and fetch data again
            setPage(page+1)  
         }
    }

 
    useEffect(()=>{
        window.addEventListener('scroll',checkBottom)
    })
    


    useEffect(()=>{
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${size}`)
             .then(response=>{
                 setPokemonList([...pokemonList,...response.data.data])
                 totalCount=response.data.totalCount  //total count of pokemon in database
                 count=response.data.count
                })
                
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