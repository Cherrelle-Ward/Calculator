const Operators = ( {handleClick} ) => {
    const operatorButtons = ["/", "+", "-", "*"]
    return ( 
        <div>
            {operatorButtons.map((button, index)=> (
                <button onClick={handleClick} key={index}>{button}</button>
            ))}
        </div>
     );
}
 
export default Operators;