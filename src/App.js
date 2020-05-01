import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Production from './Components/Production';
import CloudOnePage from './Components/CloudOnePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/production' component={Production} />
					<Route path='/cloudOne' component={CloudOnePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
