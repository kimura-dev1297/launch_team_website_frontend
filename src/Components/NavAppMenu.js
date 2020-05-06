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

export default function NavEAppMenu() {
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
				size='small'
			>
				Applications
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to='/app/metroid'>
					<MenuItem onClick={handleClose}>Metroid</MenuItem>
				</Link>

				<Link to='/app/starfox'>
					<MenuItem onClick={handleClose}>Starfox</MenuItem>
				</Link>
				<Link to='/app/outrun'>
					<MenuItem onClick={handleClose}>Outrun</MenuItem>
				</Link>
				<Link to='/app/gorf'>
					<MenuItem onClick={handleClose}>Gorf</MenuItem>
				</Link>
				<Link to='/app/nova'>
					<MenuItem onClick={handleClose}>Nova</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
