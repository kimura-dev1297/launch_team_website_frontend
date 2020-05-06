import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	}
}));

export default function NavEnvMenu() {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();

	return (
		<div>
			<Button
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				variant='contained'
				size='medium'
			>
				<Typography variant='h6' className={classes.title}>
					Environments
				</Typography>
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to='/cloud-one'>
					<MenuItem onClick={handleClose}>Cloud One</MenuItem>
				</Link>

				<Link to='/production'>
					<MenuItem onClick={handleClose}>Production</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
