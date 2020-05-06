import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import logo from '../../style/images/Metroid logo.png';
import AppDetails from '../AppDetails';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	},
	paper: {
		padding: theme.spacing(2),
		// textAlign: 'center',

		color: theme.palette.text.secondary
	},
	avatarStyles: {
		width: 'auto',
		height: 'auto'
	}
}));

export default function MetroidPage() {
	// logo, description, POC info
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container style={{ backgroundColor: 'blue' }}>
				{/* First Half of Page */}
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Grid
							container
							direction='column'
							justify='center'
							alignItems='center'
							spacing={3}
							style={{ backgroundColor: 'grey' }}
						>
							{/* Area 1/3  */}
							<Grid item xs={4}>
								<Avatar src={logo} component='div' className={classes.avatarStyles} />
							</Grid>

							{/* Area 2/3  */}
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Typography variant='h5'>Application Description</Typography>

									<Typography variant='body2' color='textSecondary'>
										Lizards are a widespread group of squadmate reptiles, with over 6,000 species,
										ranging across all continents except Antarctica
										{/*  */}
									</Typography>
								</Paper>
							</Grid>

							{/* Area 3/3  */}
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Typography variant='h5'>PM - Point Of Contact</Typography>

									<Typography variant='body2' color='textSecondary'>
										Lizards are a widespread group of squadmate reptiles, with over 6,000 species,
										ranging across all continents except Antarctica
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				{/* Second Half of Page */}
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
