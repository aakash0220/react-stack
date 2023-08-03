function Elements1({arr, setArr}){
    return (
        <div className="stack-elements stack-elements1">
            <button className="element side1" onClick={()=>{setArr([...arr, 7])}}>7</button>
            <button className="element side2" onClick={()=>{setArr([...arr, 4])}}>4</button>
            <button className="element side1" onClick={()=>{setArr([...arr, 1])}}>1</button>
            <button className="element side2" onClick={()=>{setArr([...arr, 10])}}>10</button>
            <button className="element side1" onClick={()=>{setArr([...arr, 3])}}>3</button>    
        </div>
    );
}
export default Elements1;