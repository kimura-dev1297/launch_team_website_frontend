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
			<AppDashboard
				// teamName={appInfo.teamName.metroid}
				logo={logo}
				description={appInfo.description.metroid}
				pm={appInfo.poc.metroid.pm}
				email={appInfo.poc.metroid.email}
				phone={appInfo.poc.metroid.phone}
			/>
		</div>
	);
}
