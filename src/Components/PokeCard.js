import React from "react"
const PokeCard=({pokemon})=>{
    const {id,name,images,hp,attacks,abilities}=pokemon
    const attackString=attacks?.map(attack=>attack.name).toString()
    const abilityString=abilities?.map(ability=>ability.name).toString()  
    return(
        <div  className='col-12 col-md-4 col-xl-3 px-5 py-2 mb-3'>
            <div className='shadow' style={{borderRadius:'10px',padding:'10px',height:'100%',backgroundColor:'#FFF'}} >

            <img src={images.small} className='mb-1' style={{width:'90%'}} />
            <p className='m-0' style={{fontWeight:'bold',fontSize:'18px',display:'flex',justifyContent:'space-between'}}><span>{name}</span><span>HP:{hp}</span></p>
            <p className='text-left mb-1'><span style={{fontWeight:'700'}}>Attacks:</span><br/>
                {attackString||'NA'}
            </p>
            <p className='text-left mb-1'><span style={{fontWeight:'700'}}>Abilities:</span><br/>
                {abilityString||'NA'}
            </p>
            </div>
        </div>
    )
}

export default PokeCard