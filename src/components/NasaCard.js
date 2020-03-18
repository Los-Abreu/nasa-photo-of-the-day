import React from "react";
import "./NasaCard.css";

function NasaCard (props) {
    return(
    <div className="Nasa-Card">
        <img className="apodImg" alt="NASA APOD" src={props.imgUrl}/>
        <div className="apodDesc">
            <h3>{props.title}</h3>
            <h4>{props.date}</h4>
            <p>{props.explanation}</p>
        </div>
    </div>
);
};

export default NasaCard;