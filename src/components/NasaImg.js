import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


export default function NasaImg() {
    const [apod, setApod] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            console.log(response.data)
            setApod(response.data)
        })
        .catch(error => {
            console.log("no data returned", error);
        })
    }, [])
    return (
        <div className="apodCon">
            <NasaCard imgUrl={apod.url} title={apod.title} date={apod.date} explanation={apod.explanation}/>
        </div>
    )
}