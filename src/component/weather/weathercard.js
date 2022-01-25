import React,{useState,useEffect} from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("")

    const {
        temp,
        pressure,
        humidity,
        name,
        weatherMood,
        speed,
        country,
        sunset,

    }=tempInfo


    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case "Clouds": setWeatherState("wi-day-cloudy")
                    
                    break;
                case "Haze": setWeatherState("wi-haze")
                    
                    break;
                case "Clear": setWeatherState("wi-day-sunny")
                    
                    break;
                case "Mist": setWeatherState("wi-dust")
                    
                    break;
            
                default: setWeatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weatherMood])

    // converting seconds into time

    let sec=sunset
    let date=new Date(sec*1000)
    let timeStr=`${date.getHours()}:${date.getMinutes()}`

    return (
        <div>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='tempereature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherMood}</div>
                        <div className='place'>{name},{country}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className='extra-info-leftside'>{timeStr} <br />Sunset</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-humidity'}></i></p>
                            <p className='extra-info-leftside'>{humidity} <br />Humidity</p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                            <p><i className={'wi wi-rain'}></i></p>
                            <p className='extra-info-leftside'>{pressure} <br />Pressure</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-wind'}></i></p>
                            <p className='extra-info-leftside'>{speed} <br />Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Weathercard
