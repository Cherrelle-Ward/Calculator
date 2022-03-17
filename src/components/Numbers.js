const Numbers = ( {handleClick} ) => {
    const buttons=["9","8","7","6","5","4","3","2","1","c",".","0","="]
    return ( 
        <div>
            {buttons.map((button,index)=> (
            <button onClick={handleClick} key={index}>{button}</button>
            ))}
        </div>
     );
}
 
export default Numbers;