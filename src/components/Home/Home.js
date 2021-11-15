import React, { useState } from 'react';
import DisplayWeather from '../DisplayWeather/DisplayWeather';
import './Home.css'

const Home = () => {
    const API_KEY = 'cadbcd6f8bba31ae6076c71c4f52b6e2'

    const [weather, setWeather] = useState([])

    //submit button
    const getWeather = async (e) => {
        e.preventDefault()
        let city = e.target[0].value
        let country = e.target[1].value
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        if (city !== "" && country !== "") {
            let regex = /^[a-zA-Z\s]*$/
            if (city.match(regex) && country.match(regex)) {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
                    const data = await response.json();
                    console.log(data, "fads")
                    setWeather({ data: data })
                } catch (err) {
                    console.log(err)
                }
            } else {
                alert("Please enter correct city and country")
            }
        } else {
            alert("Please enter city and country to continue")
        }
    }



    //jsx
    return (
        <div>
            <div className="container">
                <form className="input-container" onSubmit={getWeather}>
                    <div className="input-padding">
                        <label className="city-field" htmlFor="city">Enter City</label>
                        <input type="text" name="city" placeholder="Enter city name"></input>
                    </div>
                    <div className="input-padding">
                        <label className="country-field" htmlFor="country">Enter Country </label>
                        <input type="text" name="country" placeholder="Enter country name"></input>
                    </div>
                    <div className="input-padding">
                        <button type="submit" className="weather-button">Get Weather</button>
                    </div>
                </form>
            </div>

            <div className="display-container">
                {weather.length !== 0 ?
                    <DisplayWeather props={weather} /> : null}
            </div>
        </div>
    )


}

export default Home