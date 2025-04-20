import { useState, useRef } from 'react';
import ContainerData from './components/containerData'
import MoreInfo from './components/moreInfo'
import axios from 'axios'
import './App.css';

function App() {
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [weather, setWeather] = useState('')
  const [humidity, setHumidity] = useState('')
  const [data, setData] = useState({})
  const input = useRef()
  
  
  async function SearchCity(){
    
    const city = input.current.value
    const key = '2fe81c6ba071b05eb0b6e0c15b969819'
    const adress = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
    
    const dataCity = await axios.get(adress)
    const cityName = dataCity.data.name
    const tempCity = `${dataCity.data.main.temp} °C`
    const weatherCity = dataCity.data.weather[0].description
    const humidityCity = `${dataCity.data.main.humidity} %`

    console.log(dataCity.data)
    console.log(dataCity.data.name)
    console.log(temp)

    setCity(cityName)
    setData(dataCity)
    setTemp(tempCity)
    setWeather(weatherCity)
    setHumidity(humidityCity)
  

  }


  return (

    <div className="App">

      <div className='formCity'>

        <input type='text' placeholder='Busque sua cidade aqui' ref={input} className='inputCity'></input>
        <button onClick={SearchCity} className='buttomSearch'>Buscar</button>
        
      </div>
        <span id='cityName'>{city}</span>

      <ContainerData temp={temp} weather={weather} humidity={humidity}/>
      <MoreInfo />
      

    </div>
  );
}

export default App;
