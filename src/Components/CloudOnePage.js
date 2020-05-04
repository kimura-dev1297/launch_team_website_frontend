import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MediaCard from './MainCard';

function CloudOnePage() {
	return (
		// <div>
		// 	<Typography>CloudOne</Typography>
		// 	<img src={MainUtils} />
		// </div>
		<Grid container direction='column'>
			<Grid>
				<Typography>CloudOne</Typography>
			</Grid>
			<Grid item xs={12}>
				{/* <img src={MainUtils} /> */}
				<MediaCard />
			</Grid>
		</Grid>
	);
}

export default CloudOnePage;
