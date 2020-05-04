import React from 'react';
import Navbar from './Components/Navbar';
import Production from './Components/Production';
import CloudOnePage from './Components/CloudOnePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

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
