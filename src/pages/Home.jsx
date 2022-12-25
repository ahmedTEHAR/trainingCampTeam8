import React from 'react'
import Filter from '../components/Filter'
import CarList from '../components/CarList'
import NavBar from '../components/NavBar'

const  Home= ()=> {
    
    return (
        <div className=" box-border m-0 p-0 ">
             <div><NavBar/> </div>
            <div className=' flex pl-5 border-l-2 border-l-black w-full'>
                <Filter />
                <CarList />
            </div>
        

        </div>

    )
}

export default Home
