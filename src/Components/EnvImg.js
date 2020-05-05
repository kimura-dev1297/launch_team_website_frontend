import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import EnvModal from './EnvModal';

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

export default function EnvImg({ img, alt }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<EnvModal media={makeStyles.media} img={img} title={alt} />
			</CardActionArea>
		</Card>
	);
}
