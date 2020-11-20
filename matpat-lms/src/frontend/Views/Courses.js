import React, { Component } from 'react'
import axios from 'axios';

export default class CoursesPage extends Component{
    constructor() {
        super()
      }
      componentWillMount() {
        this.getData()
      }
    
      getData() {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:3001/lesson')
        // send the request
        xhr.send()
      }

    render() {
        return(
            <div className="bg-primaryColor h-full py-10">
    
                <h1 className="flex justify-center text-white text-3xl mb-6">Mes Cours</h1>
    
                <div className='p-3 text-gray-700 md:mx-20 xl:mx-48 rounded overflow-hidden shadow-lg bg-white sm:direction-column md:direction-column md:flex xl:flex 
                mb-6 cursor-pointer' 
                >
                    <img className="w-full max-w-sm md:mr-4 xl:mr-4 sm:mx-auto all:mx-auto" 
                        src="https://images.chesscomfiles.com/uploads/v1/lesson_course/8ba0f4de-6e57-11e8-b3b5-4bc0b74cd42e.26fa16e1.320x180o.b4244f444c1b@2x.png" 
                        alt="Sunset in the mountains">    
                    </img>
    
                    <div className="flex flex-col justify-between">
                        <span className="font-bold text-xl" ></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <span className="font-bold">02/06/2020</span>
                    </div>

                </div>
    
            </div>
        );
    }
}