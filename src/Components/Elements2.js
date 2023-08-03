function Elements2({arr, setArr}){
    return (
        <div className="stack-elements stack-elements2">
            <button className="element side2" onClick={()=>{setArr([...arr, 2])}}>2</button>
            <button className="element side1" onClick={()=>{setArr([...arr, 6])}}>6</button>
            <button className="element side2" onClick={()=>{setArr([...arr, 9])}}>9</button>
            <button className="element side1" onClick={()=>{setArr([...arr, 8])}}>8</button>
            <button className="element side2" onClick={()=>{setArr([...arr, 5])}}>5</button>
        </div>
    );
}
export default Elements2;