import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div className="text-center">
            <div className='font-bold py-3 text-3xl uppercase'>
                    <h1>This is the menu</h1>
            </div>
            <ul className="text-2xl">
                <li>
                    <Link to="/" className='text-blue-500 py-3 border-t border-b block' 
                    onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/courses" className='text-blue-500 py-3 border-t border-b block' 
                    onClick={props.closeMenu}>Mes Cours</Link>
                </li>
                <li>
                    <Link to="/about" className='text-blue-500 py-3 border-t border-b block' 
                    onClick={props.closeMenu}>About</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu