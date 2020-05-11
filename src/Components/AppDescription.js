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

export default function AppDescription({ logo, description, poc }) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper}>
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
						spacing={3}
						style={{ backgroundColor: '#D88373' }}
					>
						{/* Area 1/3  */}
						<Grid item xs={4}>
							<Avatar src={logo} component='div' className={classes.avatarStyles} />
						</Grid>

						{/* Area 2/3  */}
						<Grid item xs={12} style={{ backgroundColor: '#313715' }}>
							<Paper className={classes.paper}>
								<Typography variant='h5'>Application Description</Typography>

								<Typography variant='body2'>{description}</Typography>
							</Paper>
						</Grid>

						{/* Area 3/3  */}
						<Grid item xs={12} style={{ backgroundColor: '#313715', marginTop: '0.5rem' }}>
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
		</React.Fragment>
	);
}
