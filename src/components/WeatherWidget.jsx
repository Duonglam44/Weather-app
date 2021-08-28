import React from 'react'
import { WidgetWrap, WidgetLocation, WidgetInfo, WidgetInfoTemp, WidgetInfoCenter, WidgetInfoRight } from '../styles/components/WeatherWidget'

import {  BiWind,BiLogInCircle } from 'react-icons/bi'
import { IoWaterOutline } from "react-icons/io5"

import cloudyNight from '../assets/icons/cloudy-night.svg'
import cloundy from '../assets/icons/cloudy.svg'
import day from '../assets/icons/day.svg'
import night from '../assets/icons/night.svg'
import perfectDay from '../assets/icons/perfect-day.svg'
import rainNight from '../assets/icons/rain-night.svg'
import rain from '../assets/icons/rain.svg'
import storm from '../assets/icons/storm.svg'


const WeatherIcons = {
     "01n": night,
     "02d": day,
     "02n": cloudyNight,
     "03d": cloundy,
     "03n": cloundy,
     "04d": perfectDay,
     "04n": cloudyNight,
     "09d": rain,
     "09n": rainNight,
     "10d": rain,
     "10n": rainNight,
     "11d": storm,
     "11n": storm,
}

const Countrys = [
     {
          key: 'VN',
          value: 'Viet Nam'
     },
     {
          key: 'JA',
          value: 'Japan'
     },
     {
          key: 'FR',
          value: 'France'
     },
     {
          key: 'KR',
          value: 'Korea'
     },
     {
          key: 'GB',
          value: 'UK'
     },
     {
          key: 'HK',
          value: 'Hong Kong'
     },
     {
          key: 'TW',
          value: 'Taiwan'
     }
]


const WeatherWidget = ({ weather }) => {


     const dt = weather?.dt
     const timeConvert = (dt) => {
          return String(new Date(dt * 1000)).split(' ')
     }

     const country = Countrys.filter(item => item.key === weather?.sys.country)[0]?.value || weather?.sys.country

     return (
          <WidgetWrap>
               <WidgetLocation>
                    <h1>{`${weather?.name} - ${country}`}</h1>
                    <p>{`${timeConvert(dt)[0]}, ${timeConvert(dt)[1]} ${timeConvert(dt)[2]},  ${String(timeConvert(dt)[4]).slice(0, 5)}`}</p>
               </WidgetLocation>
               <WidgetInfo>
                    <WidgetInfoTemp>{`${Math.floor(weather?.main.temp - 273)}°C`}</WidgetInfoTemp>
                    <WidgetInfoCenter>
                         <img src={WeatherIcons[weather?.weather[0].icon]} alt="" />
                         <p>{weather?.weather[0].description}</p>
                    </WidgetInfoCenter>
                    <WidgetInfoRight>
                         <div>
                              <BiLogInCircle />
                              <p>{`${weather?.main.pressure} hPa`}</p>
                         </div>
                         <div>
                              <IoWaterOutline />
                              <p>{`${weather?.main.humidity} %`}</p>
                         </div>
                         <div>
                              <BiWind />
                              <p>{`${weather?.wind.speed} m/s`}</p>
                         </div>
                    </WidgetInfoRight>
               </WidgetInfo>
          </WidgetWrap>
     )
}

export default WeatherWidget
