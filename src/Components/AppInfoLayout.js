import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},
	avatarStyles: {
		width: 'auto',
		height: 'auto'
	}
}));

export default function AppInfoLayout({ logo, description, poc }) {
	const classes = useStyles();
	return (
		<div>
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
										{description}
									</Typography>
								</Paper>
							</Grid>

							{/* Area 3/3  */}
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Typography variant='h5'>PM - Point Of Contact</Typography>

									<Typography variant='body2' color='textSecondary'>
										{poc}
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
