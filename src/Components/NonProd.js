import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import nonProdImage from '../style/images/S31 Services - Non-Prod.jpg';

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		justifyContent: 'center'
	},
	media: {
		height: '100%'
	}
});

export default function NonProd() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia component='img' className={classes.media} image={nonProdImage} title='Control Panel tools' />
			</CardActionArea>
		</Card>
	);
}
