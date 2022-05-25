import {Square} from './Square'
import { useState } from 'react'
export const Game=()=>{
    const [turn,setTurn] = useState('X')
    const [cell,setCell] = useState(Array(9).fill(""))
    const [winner,setWinner] = useState(null)
    const [count,setCount] = useState(1)
    const [draw,setDraw] = useState(false)
    const handleTic=(num)=>{
        if(cell[num]!==""){
            return;
        }
        let squares = [...cell]
     if(turn==="X"){
         squares[num]="X"
         setTurn("O")
     }else{
         squares[num]="O"
         setTurn("X")
     }
   
     handleWinner(squares)
     setCell(squares)
     setCount(count+1)
     console.log(winner)
     if(count===9&&winner==null){
         setDraw(true)
     }
      
    }
    const handleWinner =(squares)=>{
     let mat={
         across:[
             [0,1,2],
             [3,4,5],
             [6,7,8],
         ],
         down:[
             [0,3,6],
             [1,4,7],
             [2,5,8]
         ],
         diagonal:[
             [0,4,8],
             [2,4,6]
         ]
     };
     for(let i in mat){
         mat[i].forEach((win)=>{
             if(
           squares[win[0]]===""||
           squares[win[1]]===""||
           squares[win[2]]===""
             ){

             }
             else if(squares[win[0]]===squares[win[1]]&&squares[win[1]]===squares[win[2]]){
              setWinner(squares[win[0]])
              
             }
         })
     }
    }
    const handleRestart=()=>{
    setWinner(null);
    setCell(Array(9).fill(""))
    setDraw(false)
    setCount(1)
 
    }
    return(
        <>
          <Square draw={draw} handleRestart={handleRestart} winner={winner} setCell={setCell} turn={turn} setTurn={setTurn} cell={cell} handleTic={handleTic}></Square>
        </>
    )
}