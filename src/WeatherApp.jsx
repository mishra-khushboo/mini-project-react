import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {

	const [weatherInfo, setWeatherInfo] = useState({
		city: "Delhi",
		feelslike: 24.84,
		temp: 25.06,
		tempMin: 24.48,
		tempMax: 26.89,
		humidity: 47,
		weather: "haze"
	})

	let updateInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	}

	return (<div>
		<h2>Weather App by khushi</h2>
		<SearchBox updateInfo={updateInfo} />
		<InfoBox info={weatherInfo} />
	</div>)
}