import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import NavEnvMenu from './NavEnvMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
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
					<NavEnvMenu />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
