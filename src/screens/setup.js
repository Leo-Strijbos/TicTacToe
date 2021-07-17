import React from 'react'
import { useHistory, Link } from "react-router-dom";

class Setup extends React.Component{
    render(){
        return(
            <div className="h-screen flex flex-col">
                <div class="text-center m-auto">
                    <p class="text-5xl text-indigo-900 font-bold font-heading text-center mb-20">Instructions</p>
                    
                    <p class="text-indigo-600 mb-6">This is a 2 player local game. You should decide who is X and who is 0, before the game starts.</p>
                    <br />
                    <Link exact to="/game/" class="bg-indigo-600 text-white p-10 py-2 rounded mt-20 border-2 border-indigo-600 hover:bg-white hover:text-indigo-600">Lets start!</Link>
                </div>
            </div>
        )
    }
}

export default Setup