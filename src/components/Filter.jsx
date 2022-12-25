import React from 'react'
import { useState } from 'react';
 


const  Filter = (props)=> {
    const [formData, setFormData] = useState({
      marque: '',
      modele: '',
      annee: '',
      prix:'',
      kilometrage:'',
    })
    const handleChange = event => {
      setFormData({
         ...formData, 
         [event.target.name]: event.target.value
      })
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      processSubmittedDataFunction(formData);
      setFormData({
        marque: '',
        modele: '',
        annee: '',
        prix:'',
        kilometrage:'',
        wilaya:'',
      }) 
    }
  return (
    <div className='border-black border-r-2 mt-10 min-w-min'>
        <div className='flex ml-0 justify-between bg-[#D9D9D9] mr-10 mt-10 rounded-2xl '>

              <form className='flex flex-col px-10 py-10 w-52  ' onSubmit={handleSubmit}>
              <input type="submit" value="Filter" className='bg-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-2xl mb-7 mt-0 '/>

                  <label htmlFor="marque" className='my-1'>Marque</label>
                  <input type="text" id="marque" placeholder='          Audi' name='marque'     value={formData.marque} 
          onChange={handleChange}></input>
                  <label htmlFor="modele" className='my-1'>Modele</label>
                  <input type="text" id="modele" placeholder='          A6' name="modele" value={formData.modele} 
          onChange={handleChange}></input>
                  <label htmlFor="annee" className='my-1'>Annee</label>
                  <input type="text" id="annee" placeholder='          A6' name="annee" value={formData.annee} 
          onChange={handleChange}></input>
                  <label htmlFor="prix" className='my-1'>prix</label>
                  <input type="text" id="prix" placeholder='          A6' name="prix" value={formData.prix} 
          onChange={handleChange}></input>
                  <label htmlFor="annee" className='my-1'>Kilometrage</label>
                  <input type="text" id="kilometrage" placeholder='          A6' name="kilometrage" value={formData.kilometrage} 
          onChange={handleChange}></input>
                  <label htmlFor="transmision">Transmision</label>
                  <select  name="trans" id="transmision" className='my-1' >
                    <option value="manualle">manualle</option>
                    <option value="automatique">automatique</option>
                    <option value="semi-automatique">semi-automatique</option>
                  </select>
                  <label htmlFor="wilaya" className='my-1'>Wilaya</label>
                  <input type="text"  className="slider" id="wilaya" value={formData.wilaya} 
          onChange={handleChange}></input>

              </form>              

        </div>
        </div>

  );
};

export default Filter;