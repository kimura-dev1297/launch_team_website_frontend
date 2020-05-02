import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	// menuButton: {
	// 	marginRight: theme.spacing(2)
	// },
	title: {
		flexGrow: 1
	},
	titleHeader: {
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			color: 'red',
			textDecoration: 'none'
		}
	}
}));

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link to='/production' className={classes.titleHeader}>
							Production
						</Link>
					</Typography>
					<Typography variant='h6' className={classes.title}>
						<Link to='/cloudOne' className={classes.titleHeader}>
							CloudOne
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
