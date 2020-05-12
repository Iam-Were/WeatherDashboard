import React from 'react';
import WeatherCard from './components/WeatherCard/component';
import { CardDeck, CardGroup } from 'reactstrap';

import './App.css';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-15} condition="Clear" city="London" country="GB" />
			<WeatherCard temp={20} condition="Tornado" city="Sydney" country="AU" />
			<WeatherCard temp={39} condition="Sunny" city="Lisbon" country="PORT" />
		</div>
	);
}

export default App;
