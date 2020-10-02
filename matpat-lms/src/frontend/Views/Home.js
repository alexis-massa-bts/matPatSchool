import React from 'react'
import homePic from '../../img/home-pic.png'

function HomePage(){
    return(
        <div className='p-3 h-page bg-primaryColor z-0 flex items-center text-white'>

            <div style={{flex: "1 0 50%"}}>

                <h1 className='font-bold text-2xl capitalize my-4 font-bold text-6x1'>MatPatSchool</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed aliquam nulla, consequat accumsan mi. 
                    Curabitur at magna efficitur, gravida dui in, venenatis nulla. Aenean purus sem, imperdiet et laoreet vitae, 
                    feugiat non eros. Vivamus condimentum tortor efficitur consequat sodales. Aenean at ex commodo, molestie nunc 
                    ac, accumsan eros. Vivamus eros magna, commodo et pharetra et, fermentum sit amet nulla. Etiam egestas orci quis 
                    sapien malesuada eleifend. Aenean eu ligula enim. Fusce porttitor, tellus id posuere pellentesque, augue quam 
                    rhoncus lacus, et auctor neque orci eu ipsum. Ut aliquam sem massa, aliquet convallis elit rutrum eu. Orci 
                    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla convallis ante 
                    lorem, in feugiat felis ornare a. Morbi et nunc lacus.
                </p>
            </div>

            <div style={{flex: "1 0 50%"}}>

                <img src={homePic} alt="book with a chess knight on it" className='flex-initial'/>

            </div>
            
        </div>  
    );
}

export default HomePage;