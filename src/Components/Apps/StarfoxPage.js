import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Starfox Logo.png';
import appInfo from './appInfo';
import AppDashboard from '../AppDashboard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function StarfoxPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppDashboard
				// teamName={appInfo.teamName.starfox}
				logo={logo}
				description={appInfo.description.starfox}
				pm={appInfo.poc.starfox.pm}
				email={appInfo.poc.starfox.email}
				phone={appInfo.poc.starfox.phone}
			/>
		</div>
	);
}
