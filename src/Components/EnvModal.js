import React from 'react';
import { Button, Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import devImage from '../style/images/development.jpg';
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

export default function EnvModal() {
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
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				<CardMedia component='img' className={classes.media} image={devImage} title='Control Panel tools' />
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<Grid item container xs={8}>
					<Grid item alignItems='center' justify='center'>
						<DialogContent>
							<CardMedia
								component='img'
								className={classes.media}
								image={devImage}
								title='Control Panel tools'
							/>
						</DialogContent>
					</Grid>
				</Grid>
			</Dialog>
		</div>
	);
}
