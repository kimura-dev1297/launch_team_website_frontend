import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Box } from '@material-ui/core';
import NavEnvMenu from './NavEnvMenu';
import NavEAppMenu from './NavAppMenu';
import logo from '../style/images/logo.png';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
		// justifyContent: 'space-between'
	}
	// title: {
	// 	flexGrow: 1
	// },
	// titleHeader: {
	// 	textDecoration: 'none',
	// 	color: 'white',
	// 	'&:hover': {
	// 		color: 'red',
	// 		textDecoration: 'none'
	// 	}
	// }
}));

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				{/* <Box component='div'>
					<img src={logo} />
				</Box> */}
				<Toolbar style={{ justifyContent: 'space-between', margin: '0 1rem' }}>
					<NavEnvMenu />
					<NavEAppMenu />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
