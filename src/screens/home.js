import React from "react"
import { useHistory, Link } from "react-router-dom";

class Home extends React.Component{
    render() {
        return(
            <div class="h-screen flex flex-col">
                <div class="text-center m-auto">
                    <p class="text-5xl text-indigo-900 font-bold font-heading text-center mb-20">Welcome to TicTacToe!</p>
                    <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                    </div>
                    <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                    </div>
                    <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                        <a class="border border-indigo-500 p-8 py-7 hover:bg-blue-100"> </a>
                    </div>
                    <p class=" text-indigo-600 mt-10 mb-6">This is a 2 player local game, so grab a friend and let's get started!</p>
                    <Link to="/setup" class="bg-indigo-600 text-white p-10 py-2 rounded mt-8 border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 mt-4">Go</Link>
                </div>
            </div>
        )
    }
}

export default Home