import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import devImage from '../images/development.jpg';
import EnvModal from './EnvModal';

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		justifyContent: 'center'
	},
	media: {
		height: '100%'
	}
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<EnvModal media={makeStyles.media} />
				{/* <CardMedia component='img' className={classes.media} image={devImage} title='Control Panel tools' /> */}
			</CardActionArea>
		</Card>
	);
}
