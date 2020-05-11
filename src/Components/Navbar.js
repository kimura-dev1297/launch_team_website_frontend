import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import NavEnvMenu from './NavEnvMenu';
import NavEAppMenu from './NavAppMenu';
import s31LogoImg from '../style/images/logo.png';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	avatarStyles: {
		width: '80%',
		height: 'auto'
	},
	media: {
		height: '2rem'
	}
}));

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar style={{ justifyContent: 'center', margin: '0 1rem' }}>
					{/* <Avatar alt='Remy Sharp' src={s31LogoImg} className={classes.large} variant='square' /> */}
					{/* <CardMedia className={classes.media} image={s31LogoImg} title='Contemplative Reptile' /> */}

					<Box
						component='img'
						src={s31LogoImg}
						display='inline'
						// p={1}
						// m={1}
						className={classes.media}
					/>

					<NavEnvMenu />
					<NavEAppMenu />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
