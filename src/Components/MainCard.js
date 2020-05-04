import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MainUtils from '../images/S31 Services - PCF Control Plane.jpg';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia component='img' className={classes.media} image={MainUtils} title='Control Panel tools' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						CloudOne Work Flow
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
						continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
