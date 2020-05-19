import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/gradius-logo.jpg';
import appInfo from './appInfo';
import AppDashboard from '../AppDashboard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function NovaPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppDashboard
				teamName={appInfo.teamName.nova}
				logo={logo}
				description={appInfo.description.nova}
				pm={appInfo.poc.nova.pm}
				email={appInfo.poc.nova.email}
				phone={appInfo.poc.nova.phone}
			/>
		</div>
	);
}
