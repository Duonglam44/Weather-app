import React, { useState, useEffect } from 'react'
import FormCity from './components/FormCity'
import WeatherWidget from './components/WeatherWidget'

import styled from 'styled-components'
import background from './assets/weather-bg.jpg'
import axios from 'axios'

const Background = styled.div`
  width:100%;
  height: 100vh; 
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(10px);
  z-index: 1;
  position: relative;
  &:before{
       position: absolute;
       content: '';
       inset: 0;
       background: #000;
       opacity: .5;
  }
`
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; 
  width:100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`
const API_KEY = '19ba4560ced530c926bba6635048ec84'


const App = () => {

  const [inputCity, setInputCity] = useState('london')
  const [weather, setWeather] = useState()

  const fetchApiWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}`)
      setWeather(response.data)
      console.log(response.data)
    } catch (error) {
      alert('Can not find this City! plese try again!!!')
    }
  }
  useEffect(() => {
    fetchApiWeather()
  }, [inputCity])


  return (
    <>
      <Background />
      <Wrapper>
        <FormCity
          setInputCity={setInputCity}
        />
        <WeatherWidget
          weather={weather}
        />
      </Wrapper>
    </>
  )
}

export default App