import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Metroid logo.png';
import appInfo from './appInfo';
import AppDashBoard from '../AppDashboard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function GorfPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppDashBoard logo={logo} description={appInfo.description.gorf} poc={appInfo.poc.gorf} />
		</div>
	);
}
