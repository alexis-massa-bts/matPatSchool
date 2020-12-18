import React from 'react'
import homePic from '../../img/home-pic.png'

function HomePage(){
    return(
        <div className='flex-grow p-3 h-page bg-primaryColor z-0 flex items-center text-white'>

            <div className="px-10" style={{flex: "1 0 50%"}}>

                <h1 className='font-bold text-2xl capitalize my-4 font-bold text-6x1'>MatPatSchool</h1>
                <p>
                    Le site MatPatSchool est un site qui consiste à fournir des cours d'échecs à des joueurs 
                    de tous les niveaux. Ces cours seront fait par des professeurs d'échec qui enseigneront 
                    tout des bases aux techniques avancées.
                </p>
            </div>

            <div style={{flex: "1 0 50%"}}>

                <img src={homePic} alt="book with a chess knight on it" className='flex-initial'/>

            </div>
            
        </div>  
    );
}

export default HomePage;