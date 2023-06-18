import React from "react";
import world from '../images/header/world.png'

export default function Header(){
    return(
        <div className="header-container">
            <img src={world}/>
            <h3>my travel journal.</h3>
        </div>
    )
}