import React from "react";
import "./style.css";

function NavBar(props){
    return (
        <div className="navbar text-center container-fluid">
            <div className="navbar-brand h1 mb-0 text-center title">Employee Directory</div>
            <p className="text-center subtitle"><small>Click on carrots to filter by heading or use the search box to narrow your results</small></p>
        </div>
    )
}

export default NavBar;