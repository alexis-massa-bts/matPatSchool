import React, { useState } from 'react'

function LoginForm(){
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
        console.log(username,password);
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
      }

    return (
        
        <div className="text-gray-300 w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-1/4">

            <div className="form_container bg-white text-gray-800 flex flex-col p-4 rounded-md">
                <h1 className="text-center text-xl uppercase text-gray-700">Login</h1>
                <hr className="mx-3" />

                <form onSubmit={handleSubmit} className="my-6 flex flex-col justify-center align-center ">
                    <label type="text" className="text-gray-600">Nom Utilisateur</label>

                    <input value={username} autoFocus placeholder="" 
                    onChange={e => setUser(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </input> <br />

                    <label className="text-gray-600">Mot De Passe</label>

                    <input value={password} onChange={e => setPassword(e.target.value)} 
                    type="password" 
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="">
                    </input>

                    <span className="text-blue-500 underline text-sm my-4 cursor-pointer w-20px align-self-center">
                        j'ai oublié mon mot de passe
                    </span> <br />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded uppercase" 
                    disabled={!validateForm()} type="submit">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default LoginForm;