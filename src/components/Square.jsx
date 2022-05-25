import {Grid} from "./Grid"
import "./style.css"
export const Square=({turn,cell,handleTic,winner,handleRestart,draw})=>{
    return(
        <div>
        <h4>Player {turn}'s turn</h4>
        <div className="main"> 
        <table>
            <tbody>
            <tr>
                <Grid handleTic={handleTic} cell={cell} num={0}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={1}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={2}></Grid>
            </tr>
            <tr>
                <Grid handleTic={handleTic} cell={cell} num={3}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={4}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={5}></Grid>
            </tr>
            <tr>
                <Grid handleTic={handleTic} cell={cell} num={6}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={7}></Grid>
                <Grid handleTic={handleTic} cell={cell} num={8}></Grid>
            </tr>
           </tbody>
        </table>
        </div>
        {winner &&(
            <>
            <h1>{winner} is the winner</h1>
            <button onClick={()=>handleRestart()}>Play Again</button>
            </>
        )}
        {draw?<div><h1>It's a draw, Restart the game</h1>
        <button onClick={()=>handleRestart()}>Play Again</button></div>:null}
        </div>
    )
}