import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import cntrlPaneImg from '../style/images/PCF Control Plane.jpg';
import devImg from '../style/images/development.jpg';
import nonProdImg from '../style/images/S31 Services - Non-Prod.jpg';
import EnvImg from './EnvImg';

function CloudOnePage() {
	return (
		<Grid container direction='column'>
			<Grid item container justify='center'>
				<Grid item container justify='center' alignItems='center' xs={12} style={{ paddingTop: '1.5rem' }}>
					<Typography variant='h6' gutterBottom>
						Available Developer Tools
					</Typography>
				</Grid>
				<Grid item justify='center' alignItems='center'>
					<Grid item xs={12} style={{ paddingBottom: '1.5rem' }}>
						<EnvImg img={cntrlPaneImg} alt='Available Developer Tools' />
					</Grid>
				</Grid>
				<Grid item container direction='row' spacing={4}>
					<Grid item xs={12} sm={6}>
						<EnvImg img={devImg} alt='Development environment' />
					</Grid>
					<Grid item xs={12} sm={6}>
						<EnvImg img={nonProdImg} alt='Non prod environment' />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CloudOnePage;
