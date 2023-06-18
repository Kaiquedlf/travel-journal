import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import data from "./data"

const travelCont = data.map(x => 
                          <Main 
                          key={x.title}
                          {...x}
                          />
)

export default function App(){
    return(
      <div>
        < Header/>
        <div className="main-container">{travelCont}</div>
        
      </div>
    )
}