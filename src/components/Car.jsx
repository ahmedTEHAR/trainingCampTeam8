import React from 'react';


// props
const Car =({car})=>{
    
    return(
        <div className=' flex mt-10 min-w-min'>
            {/* <a href={`/cars/${car.id}`}>Car: {car.id}</a> */}

            <img src='src\img\20161005111358_DSP_9274.jpg' className='w-72 rounded-2xl ml-10 '/>
            <div className='mr-10 w-full'>
                <div className='m-10 w-full'>
                    {car.anee},{car.voiture_id.marque.toUpperCase()} {car.voiture_id.modele.toUpperCase()}<br/>
                    Prix: {car.voiture_id.price} DA <br/>
                    {car.kilom} km <br/>
                </div>
                <button className='bg-[#D9D9D9] rounded-2xl px-2 float-right' href='/MesFavoris' >favoriser</button>
            </div>
            

        </div>
    )
    };

export default Car;