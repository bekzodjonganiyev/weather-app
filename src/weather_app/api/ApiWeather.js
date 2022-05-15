import React from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "dada1c76ae6dc9e9ac449c0b8c58fff3";


export const ApiWeather = async (query) => {
    const { data } = await axios
        .get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY
            }
        })

    return data
}