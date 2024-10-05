import React from 'react'

const Header = () => {
  return (
    <nav className='bg-nav-color m-0 flex justify-between p-5 sticky top-0 '>
        <div className="log">
            <h1  className='text-white'>IdeAl Soulution</h1>
        </div>
        <div className="anchors gap-3  ">
            <a className='px-6 text-white hover:text-btn-color' href="#">Service</a>
            <a className='px-6 text-white hover:text-btn-color' href="#">Products </a>
            <a className='px-6 text-white hover:text-btn-color' href="#">About Us</a>
            <a className='px-6 text-white hover:text-btn-color' href="#">Resourcs</a>
        </div>
        <button className='px-4 py-1 rounded-2xl bg-white hover:bg-btn-color hover:text-white '>Contact Us</button>
        
    </nav>
  )
}

export default Header