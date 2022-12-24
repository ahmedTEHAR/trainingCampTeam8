import React from 'react'

const  Filter =()=> {
  return (
    <div className='container'>
        <h1>Filteres</h1>
        <div className='toolbar'>
            
              <div className="dropdown">
                <button className="dropbtn">Marque</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Boite</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
              </div> 
              <div className="annee">

              </div>
              <div className="prix">

              </div>
              <div className="dropdown">
                <button className="dropbtn">Boite</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Filter