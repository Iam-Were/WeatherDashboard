import React from 'react';
import WeatherCard from './components/WeatherCard/component';
import { CardDeck, CardGroup } from 'reactstrap';

import './App.css';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-15} condition="Clear" />
			<WeatherCard temp={20} condition="Tornado" />
			<WeatherCard temp={39} condition="Fog" />
		</div>
	);
}

export default App;
