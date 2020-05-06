import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 545
	},
	media: {
		height: '100%'
	}
});

export default function AppDetails(logo) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={logo} title='Contemplative Reptile' />

				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						Metroid
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
