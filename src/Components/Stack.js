import { useState } from "react";
import DisplayStack from "./DisplayStack";
import Elements1 from "./Elements1";
import Elements2 from "./Elements2";
import Pop from "./Pop";
import Size from "./Size";
import Top from "./Top";

function Stack(){
    //define useState here
    //basically initialize a stack
    //"stack-elements" are pure components and also change the state
    //"stack" is also pure component it just displays info
    //the only impure component is my function "Stack" itself
    
    let [arr, setArr] = useState([]);
    return (
        <div className="main" id="main-project-body">
        <Size arr={arr}/>
        <Top arr={arr}/>
        {arr.length !== 0 ? <Pop arr={arr} setArr={setArr}/>:""}
        <div className="project">
            <Elements1 arr={arr} setArr={setArr}/>
            <DisplayStack arr={arr}/>
            <Elements2 arr={arr} setArr={setArr}/>    
        </div>
        </div>

    );
}

export default Stack;