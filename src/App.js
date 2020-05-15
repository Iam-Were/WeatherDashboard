import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard/component';

import './App.css';

function App() {
	const [query, setQuery] = useState('Sydney,au');
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [condition, setCondition] = useState('');
	const [country, setCountry] = useState('');
	const [weather, setWeather] = useState({
		temp: null,
		city: null,
		condition: null,
		country: null,
	});
	const data = async (q) => {
		const apiResponse = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=32d921d1b21ac9bf0cded69915f85e0e`
		);

		const resJSON = await apiResponse.json();
		return resJSON;
	};

	const handleSearch = (event) => {
		event.preventDefault();
		data(query).then((res) => {
			setWeather({
				temp: res.main.temp,
				city: res.name,
				condition: res.weather[0].main,
				country: res.sys.name,
			});
		});
	};
	useEffect(() => {
		const data = async (q) => {
			const apiResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=32d921d1b21ac9bf0cded69915f85e0e`
			);

			const resJSON = await apiResponse.json();
			return resJSON;
		};
	});
	return (
		<div className="App">
			<WeatherCard
				temp={weather.temp}
				condition={weather.condition}
				city={weather.city}
				country={weather.country}
			/>
			<form>
				<input
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<button onClick={(event) => handleSearch(event)}>Search</button>
			</form>
		</div>
	);
}

export default App;
