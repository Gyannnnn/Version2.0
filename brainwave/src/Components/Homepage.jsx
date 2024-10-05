import React from 'react'
import img1 from '../assets/hero.png';


const Homepage = () => {
    return (
        <>
            <div className='h-95 w-screen bg-nav-color flex justify-center items-center' id="home">
                <div className="home-left w-1/2 h-screen flex justify-center items-center border">
                    <div className="home-left-container flex flex-col justify-evenly items-start px-10 border h-80 gap-11">
                        <button className='px-1 bg-white rounded'>Ideal Solution</button>
                        <div>
                            <h1 className='text-white text-5xl' >Synegry Of Experties</h1>
                            <h1 className='text-white text-5xl' >Integrity in Patnership</h1>
                            <h1 className='text-white text-5xl' >Ideal Solution -as a Standard</h1>
                        </div>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at sit veritatis, amet iusto inventore cumque dolorum nemo ipsa provident.
                        </p>
                        <div className="home-left-button flex text-white gap-4">
                            <button className='bg-btn-color px-3 py-1 rounded-2xl uppercase'  >get In Touch</button>
                            <button className='bg-btn-color px-3 py-1 rounded-2xl uppercase' >Services</button>
                        </div>
                        

                    </div>
                </div>
                <div className="home-right w-1/2 h-screen ">
                    <div className="home-right-container">
                        <img className='h-10' src={img1} alt="" srcset="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepage