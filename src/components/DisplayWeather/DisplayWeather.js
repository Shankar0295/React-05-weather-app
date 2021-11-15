import React from 'react'
import './DisplayWeather.css'

const DisplayWeather = ({ props }) => {
    console.log(props);
    //For getting icons
    const iconurl =
        "http://openweathermap.org/img/wn/" +
        `${props.data.cod !== "404" ? props.data.weather[0].icon : null}` +
        ".png";

    //Jsx

    return (
        <div className="weather-container">{props.data.cod !== "404" ?
            <div>
                <div className="temp-card">
                    <h1 className="temp-deg">{Math.floor(props.data.main.temp)}<sup>o</sup><span>C</span></h1>
                    <h5 className="temp-feellike">Feels like {Math.floor(props.data.main.feels_like)}<sup>o</sup><span>C</span></h5>
                    <img className="icon" src={iconurl} alt="img"></img>
                    <p>{props.data.weather[0].main}</p>
                    <p className="location">
                        {props.data.name}, {props.data.sys.country}
                    </p>
                </div>
                <div className="details-container">
                    <div className="additional-details">
                        <h6>Min/Max(<sup>o</sup>C)</h6>
                        <h4>{Math.floor(props.data.main.temp_min)}/{Math.floor(props.data.main.temp_max)}</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Sunrise</h6>
                        <h4>{new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()} IST</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Sunset</h6>
                        <h4>{new Date(props.data.sys.sunset * 1000).toLocaleTimeString()} IST</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Humidity</h6>
                        <h4>{props.data.main.humidity} %</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Visibility</h6>
                        <h4>{props.data.visibility / 1000} km</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Cloudiness</h6>
                        <h4>{props.data.clouds.all} %</h4>
                    </div>

                    <div className="additional-details">
                        <h6>Ground Level</h6>
                        {(props.data.main.grnd_level !== undefined) ?
                            <h4>{props.data.main.grnd_level} hPa</h4> : <h4>NA</h4>}
                    </div>
                    <div className="additional-details">
                        <h6>Sea Level</h6>
                        {(props.data.main.sea_level !== undefined) ?
                            <h4>{props.data.main.sea_level} hPa</h4> : <h4>NA</h4>}
                    </div>
                    <div className="additional-details">
                        <h6>Pressure</h6>
                        <h4>{props.data.main.pressure} hPa</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Lat/Lon</h6>
                        <h4>{props.data.coord.lat} <sup>o</sup>/{props.data.coord.lon} <sup>o</sup></h4>
                    </div>
                    <div className="additional-details">
                        <h6>Wind Speed</h6>
                        <h4>{Math.floor((props.data.wind.speed * 18) / 5)} km/hr</h4>
                    </div>
                    <div className="additional-details">
                        <h6>Wind Degree</h6>
                        <h4>{props.data.wind.deg} <sup>o</sup></h4>
                    </div>
                </div>
            </div> : <h1 className="error">Oops! City not found</h1>}
        </div>
    )
}

export default DisplayWeather;