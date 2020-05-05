import React from 'react';
import { Button, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		justifyContent: 'center'
	},
	media: {
		height: '100%',
		width: '100%'
	}
});

export default function EnvModal({ img, title }) {
	const classes = useStyles();

	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant='contained' color='primary' onClick={handleClickOpen}>
				<CardMedia component='img' className={classes.media} image={img} title={title} />
			</Button>

			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
					<CloseIcon />
				</IconButton>
				<Grid item container xs={8}>
					<Grid item>
						<DialogContent>
							<CardMedia component='img' className={classes.media} image={img} title={title} />
						</DialogContent>
					</Grid>
				</Grid>
			</Dialog>
		</div>
	);
}
