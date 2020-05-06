import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import NavEnvMenu from './NavEnvMenu';
import NavEAppMenu from './NavAppMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	}
}));

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar style={{ justifyContent: 'space-between', margin: '0 1rem' }}>
					<NavEnvMenu />
					<NavEAppMenu />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
