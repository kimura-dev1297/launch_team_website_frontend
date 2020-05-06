import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Outrun Logo.png';
import AppInfo from './AppInfo';
import AppInfoLayout from '../AppInfoLayout';

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
			<AppInfoLayout logo={logo} description={AppInfo.description.outrun} poc={AppInfo.poc.outrun} />
		</div>
	);
}
