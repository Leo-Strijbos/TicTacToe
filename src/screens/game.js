import React from "react"
import { useHistory, Link } from "react-router-dom";

class Game extends React.Component{
    
    first() {
        let index = Math.random() < 0.5;
        if (index === false) {
            return(["X", "0"])
        } else {
            return(["0", "X"])
        }
        
    }

    placeMarker(position) {
        console.log("placing marker")
        let currentBoard = this.state.board
        if (this.space_check(position)) {
            console.log("space is free")
            currentBoard[position - 1] = this.state.current
            if (this.state.current === "X") {
                let newCurrent = "0"

                this.winCheck("X")
                this.full_board_check()
                this.setState({
                    board: currentBoard, 
                    current: newCurrent
                })

            } else {
                let newCurrent = "X"
                this.winCheck("0")
                this.full_board_check()
                this.setState({
                    board: currentBoard, 
                    current: newCurrent
                })
            }
            console.log(currentBoard)
        }
    }

    displayBoard() {
        if (this.state.order === null) {
            let order = this.first()
            this.setState({
                order: order,
                current:order[0]
            })
        }
        if (this.state.winner !== null) {
            console.log("winner +" + this.state.winner.toString())
            return(
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p class="text-5xl text-indigo-900 font-bold font-heading text-center mb-20">{this.state.winner[1]} wins! Well done!</p>
                    <p className="text-9xl">🏆</p>
                </div>
            )
        } else if (this.state.full === false) {
            console.log("you can keep playing")
            return(
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(7)}>{this.state.board[6]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(8)}>{this.state.board[7]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(9)}>{this.state.board[8]}</a>
                    </div>
                    <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(4)}>{this.state.board[3]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(5)}>{this.state.board[4]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(6)}>{this.state.board[5]}</a>
                    </div>
                    <div class="flex justify-center">
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(1)}>{this.state.board[0]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(2)}>{this.state.board[1]}</a>
                        <a class="border border-indigo-500 p-8 hover:bg-blue-100" onClick={() => this.placeMarker(3)}>{this.state.board[2]}</a>
                    </div> */}
                    <table className="table-fixed h-60 w-60">
                        <tbody>
                            <tr className="justify-center h-1/3">
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(7)}>{this.state.board[6]}</a>
                                </td>
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(8)}>{this.state.board[7]}</a>
                                </td>
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(9)}>{this.state.board[8]}</a>
                                </td>
                            </tr>
                            <tr className="justify-center h-1/3">
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(4)}>{this.state.board[3]}</a>
                                </td>
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(5)}>{this.state.board[4]}</a>
                                </td>
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(6)}>{this.state.board[5]}</a>
                                </td>
                            </tr>
                            <tr className="justify-center h-1/3">
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(1)}>{this.state.board[0]}</a>
                                </td>
                                <td className="border border-indigo-500  hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(2)}>{this.state.board[1]}</a>
                                </td>
                                <td className="border border-indigo-500 hover:bg-blue-100">
                                    <a class="p-8 " onClick={() => this.placeMarker(3)}>{this.state.board[2]}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text-indigo-600 mt-4">{this.state.current} is playing.</p>
                </div>
            )
        } else {
            return(
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p class="text-5xl text-indigo-900 font-bold font-heading text-center mb-20">The board is full. This results in a tie. </p>
                    <p className="text-9xl">👔</p>
                </div>
            )
        }
        
    }

    winCheck(marker) {
        let winning = ["159", "357", "123", "456", "789", "147", "258", "369"]
        let won = false

        for (const solution of winning) {
            if (this.state.board[parseInt(solution[0])-1] === this.state.board[parseInt(solution[1])-1] && this.state.board[parseInt(solution[1])-1] === this.state.board[parseInt(solution[2])-1] && this.state.board[parseInt(solution[1])-1] != " "){
                console.log(marker + " wins! Congratulations!")
                won = true
            }
        }
        if (won === true) {
            this.setState({
                winner:[won, marker]
            })
        }
        
    }

    space_check(position){
        if (this.state.board[position-1] == "X" || this.state.board[position-1] == "O"){
            return false
        } else {
            return true
        }
    }

    full_board_check() {
        let full = true
        for (const position in this.state.board){
            if (this.state.board[position] === " ") {
                full = false
            }
        }

        this.setState({
            full: full,
        })
    }
    
    constructor() {
        super();
        this.state = {
            order: null,
            board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
            winner: null,
            full: false,
            current: null,
            playing: true,
        };
    }


    render () {
        return(
            <div class="mt-8 flex-col justify-center ">
                <Link exact to="/" class="bg-red-600 text-white p-10 py-2 rounded mt-8 border-2 border-red-600 hover:bg-white hover:text-red-600 object-right mx-8 ">Quit</Link>
                {this.displayBoard(this.state.board)}
            </div>
        )
    }
}

export default Game