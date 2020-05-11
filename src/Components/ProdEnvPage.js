import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import cntrlPaneImg from '../style/images/PCF Control Plane.jpg';
import stagingImg from '../style/images/Staging.jpg';
import prodImg from '../style/images/production.jpg';
import prodBottomImg from '../style/images/production-bottom.jpg';

import EnvImg from './EnvImg';

const ProdEnvPage = () => {
	return (
		<Grid container direction='column'>
			<Grid item container justify='center'>
				<Grid item container justify='center' alignItems='center' xs={12} style={{ paddingTop: '1.5rem' }}>
					<Typography variant='subtitle2' gutterBottom>
						Available Developer Tools
					</Typography>
				</Grid>
				<Grid item justify='center' alignItems='center'>
					<Grid item xs={12} style={{ paddingBottom: '1.5rem' }}>
						<EnvImg img={cntrlPaneImg} alt='Available Developer Tools' />
					</Grid>
				</Grid>
				<Grid item container justify='center' alignItems='center' xs={12} style={{ marginBottom: '0.5rm' }}>
					<Typography variant='h6' gutterBottom>
						Production Environment
					</Typography>
				</Grid>
				<Grid item container direction='row' spacing={4}>
					<Grid item xs={12} sm={6}>
						<EnvImg img={stagingImg} alt='Staging environment' />
					</Grid>
					<Grid item xs={12} sm={6}>
						<EnvImg img={prodImg} alt='Production environment' />
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction='column' justify='center' alignItems='center'>
				<Grid item xs={12} sm={6} style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
					<EnvImg img={prodBottomImg} alt='Production environment' />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProdEnvPage;
