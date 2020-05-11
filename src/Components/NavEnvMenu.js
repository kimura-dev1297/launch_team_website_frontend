import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function NavEnvMenu() {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				variant='contained'
				size='small'
				style={{ margin: '0 1rem' }}
			>
				Environments
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to='/environment/dev'>
					<MenuItem onClick={handleClose}>Development</MenuItem>
				</Link>

				<Link to='/environment/prod'>
					<MenuItem onClick={handleClose}>Production</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
