import "./style.css"
export const Grid=({num,cell,handleTic})=>{
  
    return(
        <>
        <td className="tabled" onClick={()=>{handleTic(num)}}>{cell[num]}</td>
        </>
    )
}