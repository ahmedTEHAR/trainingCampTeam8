import React from 'react'

const  NavBar = ()=> {
  return (
    <div>
        <nav className='bg-[#2E4359] h-10 text-center text-white'>
            <ul className='list-none m-0 p-0 flex justify-around '>
                <a className="w-20 h-20" href='/'><img src="src\img\LOGO.png" /></a>
                <div className="search mt-2 text-black px-7">
                    <label htmlFor="search">
                        <button href="/" ><img src='src\img\icon.png' className='inline w-7 h-5 ml-2 pb-1'/></button>
                        <input type="text" className=' rounded-2xl placeholder:text-center' placeholder="search"/>
                    </label>
                </div>
                <div className=" pt-1 ml-0"><a href='/MesFavoris'>Mes Favoris</a></div>
                <div className="profile"><a href ="/User"><img src="src\img\Vector.png" className=' w-8 h-7 pt-1 mr-0' /></a></div>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar