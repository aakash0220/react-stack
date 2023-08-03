function DisplayStack({arr}){
    const s = arr.map(element => 
        <div className="element display-element">{element}</div>
    );
    return (
        <>
            {arr.length == 0 ?<p>click the elements to add it to the stack</p>: <div className="display-stack">{s}</div>}
        </>
    );
}

export default DisplayStack;