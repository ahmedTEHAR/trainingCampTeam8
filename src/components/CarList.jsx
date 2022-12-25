import React from "react";
import Car from "./Car";
import Filter from "./Filter"
const CarList =({formData})=>{
        const Cars =[
            {
                id:1,
                voiture_id:{marque:"Audi",
                modele:"A6",
                price:600000},
                anee:2014,
                kilom:145500,
                fuel:"Diesel",
                seller_type:"inividual",
                transmission: "Manual",
                owner:"1st owner",
                mileage:23.4,
                engine: "124B CC",
                max_power:60.90,
                seats:5,

            },
            {
                id:2,
                voiture_id:{marque:"Maruti",
                modele:"Zen",
                price:2000},
                anee:2022,
                kilom:145600,
                fuel:"Diesel",
                seller_type:"inividual",
                transmission: "automatique",
                owner:"2st owner",
                mileage:23.4,
                engine: "124B CC",
                max_power:67.20,
                seats:4,

            },
            {
                id:3,
                voiture_id:{marque:"Toyota",
                modele:"4D",
                price:200000},
                anee:2016,
                kilom:18000,
                fuel:"Diesel",
                seller_type:"inividual",
                transmission: "Manual",
                owner:"1st owner",
                mileage:23.4,
                engine: "124B CC",
                max_power:100.00,
                seats:5,

            },
            {
                id:4,
                voiture_id:{marque:"Audi",
                modele:"A3",
                price:500000},
                anee:2005,
                kilom:145500,
                fuel:"Diesel",
                seller_type:"inividual",
                transmission: "Manual",
                owner:"1st owner",
                mileage:23.4,
                engine: "124B CC",
                max_power:60.90,
                seats:5,

            },
        ];
    return (<div className="ml-10 w-full min-w-min">
                
                {
                    formData == null ?
                    Cars.map((car,index)=>
                        <Car car={car} key={index}/>
                    )
                   : Cars.filter((car)=>(car.voiture_id.marque == formData.marque)).map((car)=>
                   <Car car={car}/>
               )
                }

            </div>)

            
//   const menuItems = [...new Set(Data.map((Val) => Val.category))];

//             const filterItem = (curcat) => {
//                 const newItem = Data.filter((newVal) => {
//                   return newVal.category === curcat; 
//                         // comparing category for displaying data
//                 });
//                 setItem(newItem);
//               };


}

export default CarList;