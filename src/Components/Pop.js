function Pop({arr, setArr}){
    return (
        <div className="pop">
            <button className="element" onClick={()=>{setArr(arr.filter((ele, ind)=>{return (ind !== arr.length-1)}))}}>
                Pop</button>
        </div>
    );
}

export default Pop;