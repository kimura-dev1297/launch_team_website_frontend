import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Outrun Logo.png';
import appInfo from './appInfo';
import AppDashBoard from '../AppDashBoard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function OutrunPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppDashBoard logo={logo} description={appInfo.description.outrun} poc={appInfo.poc.outrun} />
		</div>
	);
}