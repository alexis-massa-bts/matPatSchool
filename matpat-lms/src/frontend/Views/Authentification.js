import React from 'react'
import { Link } from "react-router-dom"


function AuthentificationPage(){
    return(
        <div className=' flex items-center justify-center h-page bg-primaryColor'>
            <div className="container_buttons flex flex-col justify-center items-center">
                <h2 className="text-white mb-6 uppercase">Choix de connexion</h2>
                <Link to="/AuthProf">
                    <button value="prof" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3 capitalize" type="button">
                        professeur
                    </button>
                </Link>
                <Link to="/AuthStud">
                    <button value="stud" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize" type="button">
                        étudiant
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AuthentificationPage;