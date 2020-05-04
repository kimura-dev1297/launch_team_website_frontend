import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import MainUtils from '../images/PCF Control Plane.jpg';

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

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia component='img' className={classes.media} image={MainUtils} title='Control Panel tools' />
			</CardActionArea>
		</Card>
	);
}
