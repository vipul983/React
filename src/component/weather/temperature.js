import React,{useState,useEffect} from 'react'
import './style.css'
import Weathercard from './weathercard'


const Temperature = () => {
    const [searchValue, setSearchValue] = useState("kaithal")
    const [tempInfo, setTempInfo] = useState({})
    const getWeatherInfo= async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0109683f71ace2e5a3f56341b559d589` ;
            const res=await fetch(url);
            const data= await res.json()
            console.log(data)
            const {temp,pressure,humidity}=data.main
            const {name}=data
            const {main:weatherMood}=data.weather[0]
            const {speed}=data.wind
            const {country,sunset}=data.sys
            const myNewWeatherInfo={
                temp,
                pressure,
                humidity,
                name,
                weatherMood,
                speed,
                country,
                sunset,

            }
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" className='searchTerm' id='search' autoFocus placeholder='search...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                    <button type='button' className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            {/* weathercard */}
            <Weathercard tempInfo={tempInfo}/>
            
        </>
    )
}

export default Temperature
