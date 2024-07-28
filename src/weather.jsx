import { useState } from "react"
import axios from "axios"
function Weather()
{
    const[city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdesc]=useState("")
    function handleCity(evt)
    {
        setcity(evt.target.value)
    }
    function getWeather()
    {
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a443b6c427521101869b37a4764e607d`)
        weatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
        .catch(function(failure)
    {
        console.log(failure)
    })
    }
    return(
        <div className="bg-blue-300 p-20">
            <div className="bg-pink-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a Weather report about your city!</p>
                <input type="text"className="mt-2 border border-black rounded-md outline-black"onChange={handleCity}/>
            <br/>
                <button className="bg-black text-white p-2 rounded-md mt-2"onClick={getWeather}>Get Report</button>
                <div className="mt-2">
                    <h1><b>Weather:</b> {weather}</h1>
                    <p><b>Temperature:</b> {temp}</p>
                    <p><b>Description:</b> {desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Weather