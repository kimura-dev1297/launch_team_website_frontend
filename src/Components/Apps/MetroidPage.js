import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Metroid logo.png';
import appInfo from './appInfo';
import AppDashboard from '../AppDashboard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function MetroidPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppDashboard logo={logo} description={appInfo.description.metroid} poc={appInfo.poc.metroid} />
		</div>
	);
}
