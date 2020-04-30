import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import CloudOnePage from './Components/CloudOnePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/about' component={AboutPage} />
					<Route path='/cloudOne' component={CloudOnePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
