import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import MediaCard from './MediaCard';
import Development from './Development';
import NonProd from './NonProd';

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
							<MediaCard />
						</Grid>
					</Grid>
					<Grid item container direction='row' spacing={2}>
						<Grid item xs={6}>
							<Development />
						</Grid>
						<Grid item xs={6}>
							<NonProd />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

// C1D flow as dev>nonprod

export default CloudOnePage;
