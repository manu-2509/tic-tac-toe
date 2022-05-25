import {Grid} from "./Grid"
import "./style.css"
export const Square=({turn,cell,handleTic,winner,handleRestart,draw})=>{
    return(
        <div>
            <span className="spanflex">
                <h1 className="tic1">T</h1>
                <h1 className="tic2">I</h1>
                <h1 className="tic3">C</h1>
                <h1 className="tic4">-</h1>
                <h1 className="tic5">T</h1>
                <h1 className="tic6">A</h1>
                <h1 className="tic7">C</h1>
                <h1 className="tic8">-</h1>
                <h1 className="tic9">T</h1>
                <h1 className="tic9">O</h1>
                <h1 className="tic10">E</h1>
          </span>
        <h2>Player {turn}'s turn</h2>
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
            <h1 className="winner">{winner} is the winner</h1>
            <button className="winnerb" onClick={()=>handleRestart()}>Play Again</button>
            </>
        )}
        {draw?<div className="winner2"><h1>It's a draw, Restart the game</h1>
        <button className="winnerb" onClick={()=>handleRestart()}>Play Again</button></div>:null}
        </div>
    )
}