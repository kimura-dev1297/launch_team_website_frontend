import React from 'react';
import Navbar from './Components/Navbar';
import Production from './Components/ProductionPage';
import CloudOnePage from './Components/CloudOnePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MetroidPage from './Components/Apps/MetroidPage';

function App() {
	return (
		<Router>
			<Grid container direction='column'>
				<Grid item>
					<Navbar />
				</Grid>
				<Grid item container>
					{/* This is first side panel */}
					<Grid item xs={0} sm={2} />
					{/* This is the main content */}
					<Grid item xs={12} sm={8}>
						<Switch>
							<Route path='/production' component={Production} />
							<Route path='/cloud-one' component={CloudOnePage} />
							<Route path='/app/metroid' component={MetroidPage} />
						</Switch>
					</Grid>
					{/* This is second side panel */}
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</Router>
	);
}

export default App;
