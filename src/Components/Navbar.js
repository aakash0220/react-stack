import { useState } from "react";
import Nav from "./Nav";

function Navbar(){
    let [showMenu, setShowmenu] = useState(false);
    return (
        <div className="navbar">
            <a href="#"><p>REACT-STACK</p></a>
            <Nav showMenu={showMenu}/>
            <div className={showMenu?"close-btn-mobile":"menu-btn-desktop menu-btn-mobile"} onClick={()=>{setShowmenu(!showMenu)}}>
            </div>
        </div>
    );
}
export default Navbar; 