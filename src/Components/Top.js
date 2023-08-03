function Top({arr}){
    return <div className="element">{(arr.length === 0) ? "top : -1": `top : ${arr[arr.length-1]}`}</div>;
}

export default Top;