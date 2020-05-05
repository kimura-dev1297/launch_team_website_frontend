import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import cntrlPaneImg from '../style/images/PCF Control Plane.jpg';
import devImg from '../style/images/development.jpg';
import nonProdImg from '../style/images/S31 Services - Non-Prod.jpg';
import EnvImg from './EnvImg';

function CloudOnePage() {
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Paper>
			<Grid container direction='column'>
				<Grid item container justify='center'>
					<Grid item xs={12}>
						<Typography>CloudOne Work Flow</Typography>
					</Grid>
					<Grid item container justify='center'>
						<Grid item xs={12} style={{ paddingBottom: '3.5rem' }}>
							<EnvImg img={cntrlPaneImg} alt='Control Pane' />
						</Grid>
					</Grid>
					<Grid item container direction='row' spacing={2}>
						<Grid item xs={6}>
							<EnvImg img={devImg} alt='Development environment' />
						</Grid>
						<Grid item xs={6}>
							<EnvImg img={nonProdImg} alt='Non prod environment' />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

// C1D flow as dev>nonprod

export default CloudOnePage;
