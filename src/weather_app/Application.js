import React, { useState } from "react"
import { ApiWeather } from "./api/ApiWeather"

const Application = () => {

    const [query, setQuery] = useState('')
    const [wether, setWeather] = useState({})

    const search = async (evt) => {

        if (evt.code === "Enter") {
            const data = await ApiWeather(query)
            setWeather(data)
            setQuery('')
            console.log(data);
            
        }

        // if ( ApiWeather()) {
        //     alert("Invalit!")
        // }
    }

    return (
        <div className="main-container">
            <div className="search">
                <input
                    type="text"
                    className="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    onKeyUp={search}
                />
            </div>

            {
                wether.main && (
                    <div className="card">
                        <div className="logo">
                            <img className="weather-logo" src={`https://openweathermap.org/img/wn/${wether.weather[0].icon}@2x.png`} alt="weather logo" />
                        </div>

                        <div className="details">
                            <h2 className="city-name">
                                <span>{wether.name}</span>
                                <sup>{wether.sys.country}</sup>
                            </h2>
                        </div>

                        <div className="city-temp">
                            {Math.round(wether.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{wether.weather[0].description}</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Application