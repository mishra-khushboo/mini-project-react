import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
	let [city, setCity] = useState("");
	let [error, setError] = useState("");
	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = import.meta.env.VITE_API_KEY;

	let getWeatherInfo = async (city) => {

		let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
		if (!response.ok) {
			throw new Error("City not found");
		}
		let jsonResponse = await response.json();
		console.log(jsonResponse);


		let result = {
			city: jsonResponse.name,
			temp: jsonResponse.main.temp,
			tempMin: jsonResponse.main.temp_min,
			tempMax: jsonResponse.main.temp_max,
			humidity: jsonResponse.main.humidity,
			feelslike: jsonResponse.main.feels_like,
			weather: jsonResponse.weather[0].description,
		};
		console.log(result);
		return result;
	}


	let handleChange = (evt) => {
		setCity(evt.target.value);
		setError("");
	}

	let handleSubmit = async (evt) => {
		try {
			evt.preventDefault();

			let newInfo = await getWeatherInfo(city);
			updateInfo(newInfo);
			setError("");
			setCity("");
		} catch (err) {
			setError(err.message);
		}

	}

	return (
		<div className='SearchBox'>
			<form onSubmit={handleSubmit}>
				<TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
				<br></br><br></br>
				<Button variant="contained" type='submit'>
					Search
				</Button>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</form>
		</div>
	)
}