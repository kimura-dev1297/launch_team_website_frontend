import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

export default function HomePage() {
	const classes = useStyles();

	return <div className={classes.root} />;
}
