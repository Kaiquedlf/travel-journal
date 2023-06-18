import React from "react";
import gps from '../images/main/gps.png'

export default function Main(props){
    console.log(props)
    return(

            <div className="travel-container">
            <div className="center">
                <img src={props.imageUrl} className="place"/>

                <div className="text-container">
                    <div className="location-container">
                    <img src={gps}/>
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" className="googleUrl">View on Google Maps</a>
                </div>

                    
                    <h1 className="title">{props.title}</h1>
        
                    <p className="start-end">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            </div>
    )
}