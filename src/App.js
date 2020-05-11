import React from 'react';
import Navbar from './Components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProdEnvPage from './Components/ProdEnvPage';
import DevEnvPage from './Components/DevEnvPage';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import HomePage from './Components/HomePage';
import MetroidPage from './Components/Apps/MetroidPage';
import StarfoxPage from './Components/Apps/StarfoxPage';
import OutrunPage from './Components/Apps/OutrunPage';
import GorfPage from './Components/Apps/GorfPage';
import NovaPage from './Components/Apps/NovaPage';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container direction='column'>
				<Grid item>
					<Navbar />
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					{/*  Main Content */}
					<Grid item xs={12} sm={8}>
						<Switch>
							<Route exact path='/' render={() => <HomePage />} />
							<Route path='/environment/prod' component={ProdEnvPage} />
							<Route path='/environment/dev' component={DevEnvPage} />
							<Route path='/app/metroid' component={MetroidPage} />
							<Route path='/app/starfox' component={StarfoxPage} />
							<Route path='/app/outrun' component={OutrunPage} />
							<Route path='/app/gorf' component={GorfPage} />
							<Route path='/app/nova' component={NovaPage} />
						</Switch>
					</Grid>
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default App;
