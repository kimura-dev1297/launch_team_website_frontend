import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Gorf-Logo.png';
import appInfo from './appInfo';
import AppDashboard from '../AppDashboard';

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
			<AppDashboard
				// teamName={appInfo.teamName.gorf}
				logo={logo}
				description={appInfo.description.gorf}
				pm={appInfo.poc.gorf.pm}
				email={appInfo.poc.gorf.email}
				phone={appInfo.poc.gorf.phone}
			/>
		</div>
	);
}
