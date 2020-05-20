import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},
	avatarStyles: {
		width: 'auto',
		height: 'auto'
	}
}));

export default function AppDescription({ teamName, logo, description, pm, email, phone }) {
	const classes = useStyles();
	return (
		<Grid container item direction='column' xs={12} sm={6} style={{ padding: '1rem 2rem' }} justify='space-evenly'>
			<Grid container direction='column' alignItems='center' spacing={3}>
				{/* Area 1/3  */}
				<Grid container item style={{ width: '20rem' }}>
					<Grid item>
						<img src={logo} style={{ width: '100%' }} alt='' />
					</Grid>
				</Grid>
				{/* Area 2/3  */}
				<Grid container item alignItems='strecth'>
					<Grid item xs={12}>
						<Grid item container justify='center' style={{ color: 'white' }}>
							<Typography variant='h5'>Application Description</Typography>
						</Grid>
						<Paper className={classes.paper}>
							<Typography variant='body2'>{description}</Typography>
						</Paper>
					</Grid>
					{/* Area 3/3  */}
					<Grid item xs={12} style={{ marginTop: '2rem' }}>
						<Grid item container justify='center' style={{ color: 'white' }}>
							<Typography variant='h5'>PM - Point Of Contact</Typography>
						</Grid>
						<Paper className={classes.paper}>
							<Typography variant='body2' color='textSecondary'>
								{pm}
							</Typography>
							<Typography variant='body2' color='textSecondary'>
								{email}
							</Typography>
							<Typography variant='body2' color='textSecondary'>
								{phone}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
