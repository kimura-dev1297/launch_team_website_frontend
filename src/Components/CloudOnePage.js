import React from 'react';
import mainUtilImage from '../images/S31 Services - PCF Control Plane.jpg';
import { Grid } from '@material-ui/core';
import SimpleCard from './MainUtilities';

function CloudOnePage() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<h1>CloudOne</h1>
				{/* <img src={mainUtilImage} /> */}
				<SimpleCard />
			</Grid>
		</Grid>
	);
}

export default CloudOnePage;
